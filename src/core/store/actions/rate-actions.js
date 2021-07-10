// @ts-check

const prefix = "ApiRate/";

const actionType = {
  GET_TABLE_RATE: `${prefix}GET_TABLE_RATE`,
  GET_LATEST_RATE: `${prefix}LATEST_RATE`,
  GET_BY_BASE_RATE: `${prefix}GET_BY_BASE_RATE`,
  GET_BY_DATE: `${prefix}GET_BY_DATE`,
  GET_BY_DATE_AND_BASE_RATE: `GET_BY_DATE_AND_BASE_RATE`,
  LOADING: `${prefix}LOADING`,
  SUCCESS: `${prefix}SUCCESS`,
  ERROR: `${prefix}ERROR`,
  CLEAR_SNACKBAR: `${prefix}CLEAR_SNACKBAR`,
  CLEAR_TABLE: `${prefix}CLEAR_TABLE`,
};

const actionTypeList = Object.values(actionType);

/**
 *
 * @param {string} baseRate
 * @param {string} dateRate
 * @returns {Object}
 */
const getRateAction = (baseRate, dateRate) => ({
  type: actionType.GET_BY_DATE_AND_BASE_RATE,
  payload: {
    filter: {
      base: baseRate,
      date: dateRate,
    },
  },
});

/**
 * @returns {Object}
 */
const closeSnackbarAction = () => ({ type: actionType.CLEAR_SNACKBAR });

/**
 * @returns {Object}
 */
const clearTableAction = () => ({ type: actionType.CLEAR_TABLE });

export {
  closeSnackbarAction,
  getRateAction,
  clearTableAction,
  actionType,
  actionTypeList,
};
