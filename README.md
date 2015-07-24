
# karma-should

Use [should.js](https://github.com/shouldjs/should.js) (2.0.2+) with [karma](http://karma-runner.github.io) tests.

## Status

[![npm version][npm-image]][npm-url]

## Installation

Install the package via `npm`:

```bash
$ npm install karma-should --save
```

## Usage

Add `should` as part of `frameworks` property configuration of `karma`. In the following example, the testing framework `mocha` is also included although not required.

```js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'should']
  });
};
```

By default, `karma` loads all `plugins` that are siblings to it and their name matches `karma-*` so no additional configuration is required.

Load `karma` and all `should` assertions will now available in the tests:

```js
describe('karma tests with should', function() {
  var user = {
    name: 'foo'
  };

  it('should have a name', function() {
    user.should.have.property('name', 'foo');
  });
});
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/karma-should.svg?style=flat-square
[npm-url]: https://npmjs.org/package/karma-should
