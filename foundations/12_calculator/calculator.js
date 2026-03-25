const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, value) => total + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((final, value) => final * value, 1);
};

const power = function (b, e) {
  return b ** e;
};

const factorial = function (a) {
  let result = 1;
  for (let value = 2; value <= a; value++) {
    result *= value;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
