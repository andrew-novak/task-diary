const isValidDate = require("./isValidDate");

function isValidPageDate(date) {
  console.log("date:", date);
  console.log("isValidDate(date):", isValidDate(date));
  if (!isValidDate(date)) return false;
  if (date.getHours() !== 0) return false;
  if (date.getMinutes() !== 0) return false;
  if (date.getSeconds() !== 0) return false;
  if (date.getMilliseconds() !== 0) return false;
  return true;
}

module.exports = isValidPageDate;
