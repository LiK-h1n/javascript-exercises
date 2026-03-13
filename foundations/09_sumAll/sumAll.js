const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  let start;
  let stop;
  let sum = 0;

  if (num1 < num2) {
    start = num1;
    stop = num2;
  } else {
    start = num2;
    stop = num1;
  }

  for (let value = start; value <= stop; value++) {
    sum += value;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
