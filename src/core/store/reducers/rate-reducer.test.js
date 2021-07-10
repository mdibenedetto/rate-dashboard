// @ts-check
import { actionType } from "../actions/rate-actions";
import { rateReducer } from "./rate-reducer";

/** @type {import("./rate-reducer").AppState} */
const mockState = {
  rate: null,
  loading: false,
  error: null,
  tableRate: [],
};

describe("#Test Rate reducer", () => {
  it(`${actionType.LOADING} with mockAction`, () => {
    const mockAction = {
      type: actionType.LOADING,
      payload: {},
    };
    const { loading } = rateReducer(mockState, mockAction);

    expect(loading).toBe(true);
  });

  it(`${actionType.SUCCESS} with mockAction`, () => {
    const mockAction = {
      type: actionType.SUCCESS,
      payload: {},
    };
    const { loading, feedback } = rateReducer(mockState, mockAction);

    expect(loading).toBe(false);
    expect(feedback.severity).toBe("success");
  });

  it(`${actionType.ERROR} with mockAction`, () => {
    const mockAction = {
      type: actionType.ERROR,
      payload: { error: "dummy error" },
    };
    const { loading, feedback, error } = rateReducer(mockState, mockAction);

    expect(loading).toBe(false);
    expect(feedback.severity).toBe("error");
    expect(error).toBe(mockAction.payload.error);
  });
});
