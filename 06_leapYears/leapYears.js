const leapYears = function(year) {

    // if a year is divisible by 4, it's a leap year
    let isLeapYear = year % 4 === 0 ? true : false;

    // however, if it is divisible by and not divisible by 400, it's not a leap year
    if (year % 100 === 0 && year % 400 !== 0) isLeapYear = false;

    return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
