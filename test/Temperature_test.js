var assert = require("assert");

const Temp = require('../code/conversions/Temperature');

describe("Temperature", function () {
  it("Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getAllConversions(150, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getStandardConversion(100), "");
  });
});