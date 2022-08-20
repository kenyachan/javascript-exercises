const repeatString = function(string, repetition) {
    let repeatedString = "";

    if (repetition < 0) return 'ERROR';

    for (let i = 0; i < repetition; i++) {
        repeatedString = `${repeatedString}${string}`;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
