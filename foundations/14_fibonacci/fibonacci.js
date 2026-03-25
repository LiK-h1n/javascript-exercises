const fibonacci = function (number) {
  if (typeof number === "string") {
    number = Number(number);
  }

  if (number < 0) {
    return "OOPS";
  } else if (number === 0) {
    return 0;
  }

  let first = 1;
  let second = 1;
  let third;

  if (number === 1 || number === 2) {
    return first;
  }

  for (let index = 2; index < number; index++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
};

// Do not edit below this line
module.exports = fibonacci;
