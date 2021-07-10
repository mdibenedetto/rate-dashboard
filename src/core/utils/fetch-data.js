// @ts-check

/**
 *
 * @param {string} url
 * @returns
 */
function fetchData(url) {
  return fetch(url).then(res => res.json());
}

export { fetchData };
