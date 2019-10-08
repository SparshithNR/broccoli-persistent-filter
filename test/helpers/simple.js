'use strict';

var inherits = require('util').inherits;
var Filter = require('../../');

class MyFilter extends Filter {
  constructor(inputTree, options) {
    super(inputTree, options);
  }
  processString(string) {
    return string;
  }
}

module.exports = MyFilter;
