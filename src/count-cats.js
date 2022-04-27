const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 
function countCats(backyard) {
  let count = 0;
let catsOnly = [];
 backyard.forEach(function(item) {   
   catsOnly = item.filter(function(cat) {
   return cat == '^^';   
  }); 
  count += catsOnly.length;   
});
  return count;
}

module.exports = {
  countCats
};
