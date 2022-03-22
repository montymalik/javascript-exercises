const sumAll = function(start, end) {
    let startTotal = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (start > end) {
        for (i = end; i <= start; i++) {
            startTotal = i + startTotal;
        }
    } else {
        for (i = start; i <= end; i++) {
            startTotal = i + startTotal;
    }
}
        return startTotal;
};

// Do not edit below this line
module.exports = sumAll;
