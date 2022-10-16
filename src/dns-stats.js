const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
  ]
function getDNSStats(domains) {  
  let obj = {};
  domains = domains.map((item) => {
    return '.'+item;
  });
  let string = '';
  while (domains.some(item => item[0] === '.')) {
    domains = domains.map((item) => {
      if (!item.includes('*')) {
        string = item.slice(item.lastIndexOf('.'));
        // console.log(string); 
        if (obj[string]) {
          obj[string]++;
        } else {
          obj[string] = 1;
        }
      return item.slice(0, item.lastIndexOf('.')) + '*' + item.slice(item.lastIndexOf('.')+1);
      } else if (item[0] !== '*') {
        string.includes(item.slice(item.lastIndexOf('.'), item.indexOf('*'))) ? 
        string.slice(string.lastIndexOf('.')) === item.slice(item.lastIndexOf('.'), item.indexOf('*')) ?
        // console.log(string) :
        string = string :
        string = string.slice(0, string.lastIndexOf('.')) + item.slice(item.lastIndexOf('.'), item.indexOf('*')) :
        string = string + item.slice(item.lastIndexOf('.'), item.indexOf('*'));
        // string = '.' + item.slice(item.lastIndexOf('*')+1) + item.slice(item.lastIndexOf('.'), item.indexOf('*'));
        // console.log(string);      
      if (obj[string]) {
        (obj[string]++);
      } else { obj[string] = 1}
      return item.slice(0, item.lastIndexOf('.')) + '*' + item.slice(item.lastIndexOf('.')+1);
      } else return '*';
    });
    // console.log(domains);
    // console.log(obj);
  }
  return obj;
};

// getDNSStats(domains)


module.exports = {
  getDNSStats
};
