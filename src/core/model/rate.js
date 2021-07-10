// @ts-check

import { rateCodes } from "./rate-codes";

/**
 * @typedef {keyof rateCodes} RateCodes
 */

/** 
 * @typedef {{
 *   date: string;
 *   base: RateCodes;
 *   rates: Object.<string, number>;
 * }} Rate
} */

/**
 * @typedef {{
 *    type: string
 *    payload?: AppState
 * }} SearchRateAction
 * */

/**
 *
 * @typedef {{
 *    id: number;
 *    name: string;
 *    symbol: string;
 *    base: string;
 *    value: number;
 * }} RateTableRow
 */

/**
 * @typedef {{
 *    filter?: {
 *      date?: string
 *      base?: RateCodes
 *    }
 *    feedback?: {
 *      severity: string
 *      message: string
 *      autoHideDuration: number | null
 *    }
 *    rate?: Rate
 *    loading?: boolean
 *    error?: any
 *    tableRate?: RateTableRow []
 * }} AppState
 * */

export { rateCodes };
