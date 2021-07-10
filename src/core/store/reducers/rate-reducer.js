// @ts-check
import { all, takeLatest, call, put } from "redux-saga/effects";

import { GENERIC_SERVER_ERROR, GENERIC_SERVER_SUCCESS } from "../../constants";
import { currencies } from "../../model/currencies";
import { getRates } from "../../services/rate-http-service";
import { actionType } from "../actions/rate-actions";
import { initialState } from "../app-state";

/**
 * @typedef {import('../../model/rate').RateCodes} RateCodes
 * @typedef {import('../../model/rate').Rate} Rate
 * @typedef {import('../../model/rate').AppState} AppState
 * @typedef {import('../../model/rate').SearchRateAction}  SearchRateAction
} */

/**
 *
 * @param {AppState} state
 * @param {SearchRateAction} action
 */
function rateReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionType.LOADING:
      return { ...state, loading: true };
    case actionType.SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        feedback: {
          severity: "success",
          message: GENERIC_SERVER_SUCCESS,
          autoHideDuration: 4000,
        },
      };
    case actionType.ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
        feedback: {
          severity: "error",
          message: GENERIC_SERVER_ERROR,
          autoHideDuration: null,
        },
      };
    case actionType.CLEAR_SNACKBAR:
      return {
        ...state,
        feedback: null,
      };
    case actionType.CLEAR_TABLE:
      return {
        ...state,
        tableRate: [],
      };
    default:
      return state;
  }
}

/**
 *
 * @param {SearchRateAction} action
 */
function* dataFetcher({ type, payload }) {
  yield put({ type: actionType.LOADING });

  try {
    let rate;

    switch (type) {
      case actionType.GET_LATEST_RATE:
        rate = yield call(getRates);
        break;
      case actionType.GET_BY_DATE:
        rate = yield call(getRates, { dateRate: payload.filter.date });
        break;

      case actionType.GET_BY_BASE_RATE:
        rate = yield call(getRates, { baseRate: payload.filter.base });
        break;

      case actionType.GET_BY_DATE_AND_BASE_RATE:
        rate = yield call(getRates, {
          dateRate: payload.filter.date,
          baseRate: payload.filter.base,
        });
        break;
      default:
        throw Error(`No action ${type} exists`);
    }

    if (rate) {
      const tableRate = Object.keys(currencies).map((key, index) => ({
        id: index + 1,
        ...currencies[key],
        base: key,
        value: rate.rates[key],
      }));

      yield put({ type: actionType.SUCCESS, payload: { rate, tableRate } });
    }
  } catch (error) {
    console.error("APP ERROR: Someomthing went wrong :(", error);
    yield put({ type: actionType.ERROR, payload: { error } });
  }
}

function* rateFetchingSaga() {
  yield all([
    takeLatest(actionType.GET_LATEST_RATE, dataFetcher),
    takeLatest(actionType.GET_BY_DATE, dataFetcher),
    takeLatest(actionType.GET_BY_BASE_RATE, dataFetcher),
    takeLatest(actionType.GET_BY_DATE_AND_BASE_RATE, dataFetcher),
    takeLatest(actionType.GET_TABLE_RATE, dataFetcher),
  ]);
}

export { rateFetchingSaga, rateReducer };
