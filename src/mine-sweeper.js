const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let area = [];  
  for (let i = 0; i < matrix.length; i++) {
    area.push([]);
    for (let j = 0; j < matrix[i].length; j++) {      
      area[i][j] = 0;
    }
  }
  for (let i = 1; i < matrix.length-1; i++) {    
    for (let j = 0; j <= matrix[i].length; j++) {
      if (matrix[i][j]) {        
        if (j>0) {
          area[i][j-1]++;
          area[i-1][j-1]++;
          area[i+1][j-1]++;
        }        
        if (j<=matrix[i].length-1) {
          area[i][j+1]++;
          area[i-1][j+1]++;
          area[i+1][j+1]++;
        }               
        area[i-1][j]++;                
        area[i+1][j]++;        
      } 
    }    
  }
  if (matrix.length > 0) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[0][j]) {
        if (j>0) {
          area[0][j-1]++;
          area[1][j-1]++;
        }
        if (j < matrix.length-1) {
          area[0][j+1]++;
          area[1][j+1]++;
        }
        area[1][j]++;        
      }
    }
  }
    for (let j = 0; j < matrix[matrix.length-1]; j++) {
      if (matrix[matrix.length-1][j]) {
        if (j>0) {
          area[matrix.length-1][j-1]++;
          area[matrix.length-2][j-1]++;
        }
        if (j < matrix.length-1) {
          area[matrix.length-1][j+1]++;
          area[matrix.length-2][j+1]++;
        }
        area[matrix.length-2][j]++;        
      }
    }    
  return area;
}

module.exports = {
  minesweeper
};
