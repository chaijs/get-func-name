'use strict';
var assert = require('simple-assert');
var getFuncName = require('..');
describe('getFuncName', function () {
  it('should get the function name', function () {
    function normalFunction() {
      return 1;
    }

    assert(getFuncName(normalFunction) === 'normalFunction');
  });

  it('should get correct name when function is surrounded by comments', function () {
    function /*one*/correctName/*two*/() { // eslint-disable-line no-inline-comments, spaced-comment
      return 0;
    }

    assert(getFuncName(correctName) === 'correctName');
  });

  it('should return empty string for anonymous functions', function () {
    var anonymousFunc = (function () {
      return function () { // eslint-disable-line func-style
        return 2;
      };
    }());
    assert(getFuncName(anonymousFunc) === '');
  });
});

