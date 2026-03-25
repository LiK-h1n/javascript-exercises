const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string.at(left) != string.at(right)) {
      return false;
    }

    ++left;
    --right;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
