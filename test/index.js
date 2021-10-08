import { getFuncName } from '../index.js';
function assert(expr, msg) {
  if (!expr) {
    throw new Error(msg || 'Assertion Failed');
  }
}

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
    const anonymousFunc = (function () {
      return function () { // eslint-disable-line func-style
        return 2;
      };
    }());
    assert(getFuncName(anonymousFunc) === '');
  });

  it('should return `null` when passed a String as argument', function () {
    assert(getFuncName('') === null);
  });

  it('should return `null` when passed a Number as argument', function () {
    assert(getFuncName(1) === null);
  });

  it('should return `null` when passed a Boolean as argument', function () {
    assert(getFuncName(true) === null);
  });

  it('should return `null` when passed `null` as argument', function () {
    assert(getFuncName(null) === null);
  });

  it('should return `null` when passed `undefined` as argument', function () {
    assert(getFuncName(undefined) === null);
  });

  it('should return `null` when passed a Symbol as argument', function () {
    if (typeof Symbol !== 'undefined') {
      assert(getFuncName(Symbol('symbol')) === null);
    }
  });

  it('should return `null` when passed an Object as argument', function () {
    assert(getFuncName({}) === null);
  });
});

