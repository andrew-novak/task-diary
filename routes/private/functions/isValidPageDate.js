const isValidDate = require("./isValidDate");

function isValidPageDate(date) {
  console.log("date:", date);
  console.log("isValidDate(date):", isValidDate(date));
  console.log("date.getHours() !== 0", date.getHours() !== 0);
  console.log("ddate.getMinutes() !== 0", date.getMinutes() !== 0);
  console.log("date.getSeconds() !== 0", date.getSeconds() !== 0);
  console.log("date.getMilliseconds() !== 0", date.getMilliseconds() !== 0);
  if (!isValidDate(date)) return false;
  if (date.getHours() !== 0) return false;
  if (date.getMinutes() !== 0) return false;
  if (date.getSeconds() !== 0) return false;
  if (date.getMilliseconds() !== 0) return false;
  return true;
}

module.exports = isValidPageDate;
