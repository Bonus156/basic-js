const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let digit;
  do {
  sum = 0;
  while(n) {
  digit = n % 10;
  sum += digit;
  n = Math.floor(n / 10);
  }
  n = sum;
  } while(sum >= 10);
  
  return sum;
}

// console.log(getSumOfDigits(15852))

module.exports = {
  getSumOfDigits
};
