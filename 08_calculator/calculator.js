const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbersToSum) {
  let total = 0;

  for (number of numbersToSum) {
    total += number;
  }

  return total;
};

const multiply = function(numbersToMultiply) {
  let total = 1;

  for (number of numbersToMultiply) {
    total *= number;
  }

  return total;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
	return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
