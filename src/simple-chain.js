const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let validateValue = '(  )';

    if (arguments.length) {
      validateValue = `( ${value} )`;
    }

    this.chain.push(validateValue);

    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)
      || (position <= 0)
      || (position > this.getLength())) {
      this.chain = [];
      throw new Error();
    }

    if (position === 1) {
      this.chain.shift();
    } else if (position === this.getLength()) {
      this.chain.pop();
    } else {
      const arr = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
      this.chain = arr;
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
