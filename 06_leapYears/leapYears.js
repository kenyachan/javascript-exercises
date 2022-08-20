const leapYears = function(year) {
    let isLeapYear = year % 4 === 0 ? true : false;

    if (year % 100 === 0 && year % 400 !== 0) isLeapYear = false;

    return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
