/**
 * ### .getFuncName(constructorFn)
 *
 * Returns the name of a function.
 * When a non-function instance is passed, returns `null`.
 * This also includes a polyfill function if `aFunc.name` is not defined.
 *
 * @name getFuncName
 * @param {Function} funct
 * @namespace Utils
 * @api public
 */

const { toString } = Function.prototype;
const functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*/)]+\*\/\s*)*([^\s(/]+)/;
const maxFunctionSourceLength = 512;
function getFuncName(aFunc) {
  if (typeof aFunc !== 'function') {
    return null;
  }

  let name = '';
  if (typeof Function.prototype.name === 'undefined' && typeof aFunc.name === 'undefined') {
    // Here we run a polyfill if Function does not support the `name` property and if aFunc.name is not defined
    // eslint-disable-next-line prefer-reflect
    const functionSource = toString.call(aFunc);
    // To avoid unconstrained resource consumption due to pathalogically large function names,
    // we limit the available return value to be less than 512 characters.
    if (functionSource.indexOf('(') > maxFunctionSourceLength) {
      return name;
    }
    const match = toString.call(aFunc).match(functionNameMatch);
    if (match) {
      [ name ] = match;
    }
  } else {
    // If we've got a `name` property we just use it
    // eslint-disable-next-line prefer-destructuring
    name = aFunc.name;
  }

  return name;
}

export { getFuncName };
