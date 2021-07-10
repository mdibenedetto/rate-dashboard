// @ts-check
import fetchMock from "jest-fetch-mock";

import mockData from "../../../mocks/data/rates.json";
import { fetchData } from "./fetch-data";

describe("#Test fetch HTTP request", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should return the list of rates", async () => {
    // GET https://api.vatcomply.com/rates HTTP/1.1
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    // const URL = "../../../mocks/data/rates.json";
    const json = await fetchData("https://api.vatcomply.com/rates");
    expect(json).toBeDefined();
  });
});
