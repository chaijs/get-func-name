'use strict';
var assert = require('simple-assert');
var getFuncName = require('..');
describe('getFuncName', function () {
  it('getFuncName', function () {
    // Asserting that `getFuncName` behaves correctly
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
    assert(getFuncName(correctName) === 'correctName');
    assert(getFuncName(withoutComments) === 'withoutComments');
    assert(getFuncName(anonymousFunc) === '');
  });
});
