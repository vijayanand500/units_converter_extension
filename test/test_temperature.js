var assert = require('assert');
const get_possible_conversions_list = require('../code/main_scripts/utility');

describe('Utility', function() {
  describe('#get_possible_conversions_list(type, currentUnit)', function() {
    it('should return ["kelvin","fahrenheit"] when current unit is "celcius"', function () {
      assert.deepStrictEqual(["kelvin","fahrenheit"], get_possible_conversions_list("temperature", "celcius"))
    })
  })
})