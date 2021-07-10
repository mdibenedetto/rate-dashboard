// @ts-check

function getTodayDate() {
  const padZero = val => String(val).padStart(2, "0");
  const dt = new Date();
  return `${dt.getFullYear()}-${padZero(dt.getMonth())}-${padZero(
    dt.getDate()
  )}`;
}

export { getTodayDate };
