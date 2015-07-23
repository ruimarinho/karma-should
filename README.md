
# karma-should

[should](https://github.com/shouldjs/should.js) for [karma](http://karma-runner.github.io).


## Status

[![npm version][npm-image]][npm-url]

## Installation


Install the module via npm:

```sh
$ npm install --save-dev karma-should
```


## Configuration

Add `should` to `frameworks` and `karma-should` to `plugins` keys in your karma configuration:

```js
module.exports = function(config) {
  config.set({
    // include 'should' as the assertion library used by 'mocha' (a testing framework), for example
    frameworks: ['mocha', 'should'],

    // by default karma includes 'karma-*', so the next statement is only necessary for custom plugin inclusion
    plugins: ['karma-should']
  });
};
```


## Usage

All `should` assertions are available in the tests:

```js
describe('karma tests with should'), function() {
  var user = {
    name: 'John'
  };

  it('should have a name', function() {
    user.should.have.property('name', 'John');
  });
});
```


## License

MIT

[npm-image]: https://img.shields.io/npm/v/karma-should.svg?style=flat-square
[npm-url]: https://npmjs.org/package/karma-should
