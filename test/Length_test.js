var assert = require('assert')

const Length = require('../code/conversions/Length')

describe('Length', function() {
  describe('#getStandardConversion(quantity)', function() {
    it('should return 3000 when quantity is 3 meters', function() {
      const length = new Length("kilometers", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.strictEqual(length.getStandardConversion(3), 3000)
    })
  })
})

describe('Length', function() {
  describe('#getAllConversions(quantity, precision)', function() {
    it('should return ', function() {
      const length = new Length("kilometers", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.strictEqual(length.getAllConversions(3, 2), ',3.0 m,0.001864512119 mi,300 cm,3000 mm,3.28083 yd,9.84252 ft,118.1103 inch,0.01492537313 fur,0.1491276035 chain')
    })
  })
})