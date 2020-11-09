var expect = require('chai').expect
var testingFunction = require('./dist/index.js')
var assert = require('assert')

describe('should return 0', function () {
  it('return 0', function () {
    assert.strictEqual(testingFunction(), 0)
  })
})
