// @ts-check

import PropTypes from "prop-types";
import React, { createContext } from "react";
import useSagaReducer from "use-saga-reducer";

import { rateFetchingSaga, rateReducer } from "../store";
import { initialState } from "../store/app-state";

/**
 * @typedef {import('../model/rate').AppState} AppState
 * @typedef {import('../model/rate').SearchRateAction} SearchRateAction
 */

const GlobalContext = createContext({
  state: initialState,
  /**
   * @param {SearchRateAction} action
   * @returns {void}
   */
  dispatch: _ => null,
});

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useSagaReducer(rateFetchingSaga, rateReducer);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.element,
};

export { GlobalContext, GlobalProvider };
