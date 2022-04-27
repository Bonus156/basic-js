const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  let newArray =[];
  const MSG = '\'arr\' parameter must be an instance of the Array!';
  if (!Array.isArray(array)) throw new Error('\'arr\' parameter must be an instance of the Array!'); 
  else {
  array.forEach(function(item, index, arr) {
    if ((item === '--double-next') && (index === (arr.length - 1))) {

    } else if ((item === '--double-next')) {
      newArray.push(arr[index + 1]);
    } else if ((index === 0) && ((item === '--discard-prev') || (item === '--double-prev'))) {

    } else if ((item === '--discard-prev') && (index !== 0)) {
      newArray.pop();
    } else if ((item === '--double-prev')) {
      newArray.push(arr[index - 1]);
      if ((arr[index-2] === '--discard-next')) {
      newArray.pop();
      newArray.pop();
      }
    } else if (item === '--discard-next') {
      
    } else newArray.push(item);
  });
  return newArray;
  }
}

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
// [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
//[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]
//[1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
//[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
                // ['--double-prev', 1, 2, 3],
                // [1, 2, 3, '--double-next'],
                // [1, 2, 3, '--discard-next']

module.exports = {
  transform
};
