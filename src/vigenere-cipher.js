const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  _getLetterOnly(letter, keyArray, index) {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      return ((letter.charCodeAt() - 65 + keyArray[index % keyArray.length].charCodeAt() - 65) % 26 + 65)
    } else return letter.charCodeAt();
  }
  _decryptLetterOnly(letter, keyArray, index) {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      return (letter.charCodeAt() - keyArray[index % keyArray.length].charCodeAt()) < 0 ?  (letter.charCodeAt() - keyArray[index % keyArray.length].charCodeAt() + 65 + 26) : (letter.charCodeAt() - keyArray[index % keyArray.length].charCodeAt() + 65)
    } else return letter.charCodeAt();
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let arr = [];
    let encryptArr = [];
    let spacesInd = [];    
    let upperMessage = message.trim().toUpperCase();
    let upperKey = key.trim().toUpperCase();
    arr = upperMessage.split('');
      arr.forEach(function(item, index) {
      if (item === ' ') spacesInd.push(index);
    });
    let withoutSpacesArr = arr.filter(function(item) {
      return (item !== ' ');
    });    
    for (let i = 0; i < withoutSpacesArr.length; i++) {
      encryptArr.push(String.fromCharCode(this._getLetterOnly(withoutSpacesArr[i], upperKey, i)));
    };
    for (let i = 0; i < spacesInd.length; i++) {
      encryptArr.splice(spacesInd[i], 0, ' ');
    };
    return this.isDirect ? encryptArr.join('') : encryptArr.reverse().join('');    
  }  
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let arr = [];
    let decryptArr = [];
    let spacesInd = [];    
    let upperMessage = message.trim().toUpperCase();
    let upperKey = key.trim().toUpperCase();
    arr = upperMessage.split('');
      arr.forEach(function(item, index) {
      if (item === ' ') spacesInd.push(index);
    });
    let withoutSpacesArr = arr.filter(function(item) {
      return (item !== ' ');
    });    
    for (let i = 0; i < withoutSpacesArr.length; i++) {      
      decryptArr.push(String.fromCharCode(this._decryptLetterOnly(withoutSpacesArr[i], upperKey, i)));
    };
    for (let i = 0; i < spacesInd.length; i++) {
      decryptArr.splice(spacesInd[i], 0, ' ');
    };
    return this.isDirect ? decryptArr.join('') : decryptArr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
