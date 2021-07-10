// @ts-check
import { actionType, getRateAction, closeSnackbarAction } from "./rate-actions";

describe("#Test Rate actions", () => {
  it(`fetchBillsData should create ${actionType.GET_BY_DATE_AND_BASE_RATE} action`, () => {
    const base = "EUR";
    const date = "2021-06-04";

    expect(getRateAction(base, date)).toEqual({
      type: actionType.GET_BY_DATE_AND_BASE_RATE,
      payload: {
        filter: {
          base,
          date,
        },
      },
    });
  });

  it(`closeSnackbarAction should create ${actionType.CLEAR_SNACKBAR} action`, () => {
    expect(closeSnackbarAction()).toEqual({
      type: actionType.CLEAR_SNACKBAR,
    });
  });
});
