const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 let onlyNames = [];
 function createDreamTeam(members) {
   onlyNames = members.filter(function(name) {
     return (typeof(name) == 'string');
   });
   if (onlyNames == false) return false;
   let firstLetters = onlyNames.map(function(name) {
     return name[0].toUpperCase();
   });
   return firstLetters.sort().join('');
 }

module.exports = {
  createDreamTeam
};
