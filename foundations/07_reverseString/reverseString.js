const reverseString = function (string) {
  let reversed = "";
  for (let index = string.length - 1; index > -1; --index) {
    reversed += string[index];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
