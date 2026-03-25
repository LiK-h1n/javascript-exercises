const findTheOldest = function (arr) {
  arr.sort(
    (a, b) => { 
        let aAge;
        let bAge;

        if (! Object.hasOwn(a, "yearOfDeath")) {
            aAge = new Date().getFullYear() - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }

        if (! Object.hasOwn(b, "yearOfDeath")) {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        if (aAge > bAge) {
            return 1;
        } else if (aAge < bAge) {
            return -1;
        }

        return 0;
    }
  );
  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
