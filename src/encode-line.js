const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = '';
  let count = 0;
  let letterNum = 0;
  let i = 0;
  while (i < str.length) {    
    while (str[i] === str[letterNum]) {
      count++;
      letterNum++;
    };
    if (count === 1) count = '';
    string += count + str[i];
    count = 0;
    i = letterNum;
  };
return string;
}



module.exports = {
  encodeLine
};
