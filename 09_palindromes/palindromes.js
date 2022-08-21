let reverseString = require('../03_reverseString/reverseString');

const palindromes = function (string) {
    let cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    return reverseString(cleanString) === cleanString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
