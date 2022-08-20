const sumAll = function(fromNumber, toNumber) {
    let total = 0;

    if (fromNumber < 0 || toNumber < 0) return "ERROR";
    if (typeof fromNumber !== "number" || typeof toNumber !== "number") return "ERROR";

    let from = fromNumber < toNumber ? fromNumber : toNumber;
    let to = fromNumber > toNumber ? fromNumber : toNumber;

    for (let i = from; i <= to; i++) {
        total = total + i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
