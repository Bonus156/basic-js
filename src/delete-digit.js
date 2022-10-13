const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = Array.from(n.toString());
  if (arr[0] < arr[1]) {
    arr.shift();
    return +arr.join('');
  } 
  arr[arr.findIndex((el) => el == Math.min(...arr))] = '';  
  return +arr.join('');
}


module.exports = {
  deleteDigit
};
