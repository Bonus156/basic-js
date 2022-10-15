const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = [];
  let heights = [];
    arr.forEach(function(item, index) {
    if (item === -1) indexes.push(index);
  });  
  heights = arr.filter(function(item) {
    return (item !== -1);
  });   
  heights.sort( (a, b) => a - b );
  for (let i = 0; i < indexes.length; i++) {
    heights.splice(indexes[i], 0, -1);
  };
  return heights;
}

module.exports = {
  sortByHeight
};
