const removeFromArray = function(array, ...removeValues) {
    return array.filter(value => ! removeValues.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
