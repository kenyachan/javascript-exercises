const reverseString = function(string) {
    // let reversedString = "";
    // let stringArray = string.split("");

    // for (let i = stringArray.length; i > 0; i--) {
    //     reversedString = `${reversedString}${stringArray[i - 1]}`
    // }

    // return reversedString;

    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
