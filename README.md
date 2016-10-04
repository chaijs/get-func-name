<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> get-function-name
  </a>
</h1>

<p align=center>
  Utility for getting a function's name for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/get-function-name/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/get-function-name.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/get-function-name">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/get-function-name/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/get-function-name">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/get-function-name/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/get-function-name">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/get-function-name.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/get-function-name">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/get-function-name.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/get-function-name.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-get-function-name">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-get-function-name.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is get-function-name?

This is a module to retrieve a function's name securely and consistently both in NodeJS and the browser.

## Installation

### Node.js

`get-function-name` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install get-function-name

### Browsers

You can also use it within the browser; install via npm and use the `get-function-name.js` file found within the download. For example:

```html
<script src="./node_modules/get-function-name/get-function-name.js"></script>
```

## Usage

The module `get-function-name` exports the following method:

* `getFunctionName(fn)` - Returns the name of a function.

```js
var getFunctionName = require('get-function-name');
```

#### .getFunctionName(fun)

```js
var getFunctionName = require('get-function-name');

var unknownFunction = function myCoolFunction(word) {
   return word + 'is cool'; 
};

var anonymousFunction = (function () {
    return function () {};
}());

getFunctionName(unknownFunction) // 'myCoolFunction'
getFunctionName(anonymousFunction) // ''
```
