'use strict';
var assert = require('simple-assert');
var getFunctionName = require('..');
describe('getFunctionName', function () {
  it('getFunctionName', function () {
    // Asserting that `getFunctionName` behaves correctly
    function /*one*/correctName/*two*/() { // eslint-disable-line no-inline-comments, spaced-comment
      return 0;
    }
    function withoutComments() {
      return 1;
    }

    var anonymousFunc = (function () {
      return function () { // eslint-disable-line func-style
        return 2;
      };
    }());
    assert(getFunctionName(correctName) === 'correctName');
    assert(getFunctionName(withoutComments) === 'withoutComments');
    assert(getFunctionName(anonymousFunc) === '');
  });
});
