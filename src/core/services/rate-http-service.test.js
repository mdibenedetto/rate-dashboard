// @ts-check
import fetchMock from "jest-fetch-mock";

import mockDataByDate from "../../../mocks/data/rate.date.json";
import mockDataByBase from "../../../mocks/data/rates.usd.json";
import { getRates } from "./rate-http-service";

describe("#Test Rate HTTP request", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it(
    "should success an HTTP request `https://api.vatcomply.com/rates?base=USD` " +
      "\nand  return the list of all rates filtered by base rate",
    async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockDataByBase));
      const baseRate = "USD";
      const json = await getRates({ baseRate });
      expect(json).toBeDefined();
      expect(json.rates).toBeDefined();
      expect(json.base).toBe(baseRate);
    }
  );
  it(
    "should success an HTTP request `https://api.vatcomply.com/rates?date=2000-04-05` " +
      "\nand  return the list of all rates filtered by date",
    async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockDataByDate));
      const dateRate = "2000-04-05";
      const json = await getRates({ dateRate });
      expect(json).toBeDefined();
      expect(json.rates).toBeDefined();
      expect(json.date).toBe(dateRate);
    }
  );

  it("Should fail an HTTP request", async () => {
    const baseRate = "pippo";
    // @ts-ignore
    await expect(getRates({ baseRate })).rejects.toThrow(
      `Base currency '${baseRate} is not supported`
    );

    const dateRate = "1/2/2020";
    await expect(getRates({ dateRate })).rejects.toThrow(
      `Date currency '${dateRate}' has invalid date format`
    );
  });
});
