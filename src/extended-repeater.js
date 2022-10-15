const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = `${str}`;
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  options.addition = `${options.addition}`;
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.separator) options.separator = '+';  
  let subString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;  
  let string = (str + subString + options.separator).repeat(options.repeatTimes - 1) + str + subString;
  return string;
};

module.exports = {
  repeater
};
