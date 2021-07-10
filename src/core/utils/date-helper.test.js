// @ts-check
import { getTodayDate } from "./date-helper";

const DATE_FORMAT =
  /(((19|20)\d\d))-(0[1-9]|1[0-2])-((0|1)[0-9]|2[0-9]|3[0-1])/;

describe("#Test getTodayDate function", () => {
  it(`should return a string date with formtat ${DATE_FORMAT}`, async () => {
    const today = getTodayDate();
    expect(today).toMatch(DATE_FORMAT);
  });
});
