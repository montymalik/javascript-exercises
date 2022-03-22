const removeFromArray = function(original, ...theArgs) {
    return (original.filter(value => !theArgs.includes(value)));
};

// Do not edit below this line
module.exports = removeFromArray;
