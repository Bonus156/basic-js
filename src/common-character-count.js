const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(firstString, secondString) {
  let count = 0;
  let array = firstString.split('');
  let arrayLength = array.length;
  let secondArray = secondString.split('');
  let secondArrayLength = secondArray.length;
  
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < secondArrayLength; j++){
      if (secondArray[j] == array[i] && secondArray[j] && array[i]) {
        delete array[i];
        delete secondArray[j];
        
        count++;
       
      }
    }
  } return count;
}

module.exports = {
  getCommonCharacterCount
};
