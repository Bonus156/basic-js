const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let i = 0; j = 0;
  while (i < matrix[0].length) {
    j = 0;
    while (j < matrix.length) {
      if (matrix[j][i] !== 0) {
        sum += matrix[j][i];
        j++;
      }
      else j = matrix.length;
    };
    i++;
  } 
  return sum;
}
console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
  ]));

module.exports = {
  getMatrixElementsSum
};
