const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;    
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position < this.chain.length && position > 0 && position === Math.round(position)) {
      this.chain.splice(position - 1, 1);
      return this;
    } 
    this.chain = [];
    throw new Error('You can\'t remove incorrect link!');
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const answer = this.chain.join('~~');
    this.chain = [];
    return answer;
  }
};

// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());

module.exports = {
  chainMaker
};
