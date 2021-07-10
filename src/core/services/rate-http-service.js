// @ts-check

import { rateCodesList } from "../model/rate-codes";
import { fetchData } from "../utils/fetch-data";

const RATE_API_URL = `https://api.vatcomply.com/rates`;

/**
 * @typedef {import('../model/rate').RateCodes} RateCodes
 * @typedef {import('../model/rate').Rate} Rate
} */

/**
 *
 * @param {{
 *  baseRate?: RateCodes
 *  dateRate?: string
 * }} filter
 * @returns {Promise<Rate>}
 */
async function getRates({ baseRate, dateRate } = {}) {
  const queryParams = [];

  // add param `baseRate`
  if (baseRate) {
    if (rateCodesList.includes(baseRate)) {
      queryParams.push(`base=${baseRate}`);
    } else {
      throw Error(`Base currency '${baseRate} is not supported`);
    }
  }

  // add param `dateRate`
  if (dateRate) {
    if (dateRate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      queryParams.push(`date=${dateRate}`);
    } else {
      throw Error(`Date currency '${dateRate}' has invalid date format`);
    }
  }

  const query = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
  const url = `${RATE_API_URL}${query}`;

  return fetchData(url);
}

export { getRates };
