var assert = require('assert');
const get_possible_conversions_list = require('../code/main_scripts/utility');

describe('Utility', function() {
  describe('#get_possible_conversions_list(type, currentUnit)', function() {
    it('should return ["eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"] when current unit is "USD"', function () {
      assert.deepStrictEqual(["eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"], get_possible_conversions_list("currency", "USD"))
    })
  })
})