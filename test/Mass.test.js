var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

const Mass = require("../code/conversions/Mass");

describe("Mass", function () {
  it("Conversions should not be empty", function () {
    let kilograms = new Mass("kilogram", [
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "ton",
    ]);
    assert.notStrictEqual(kilograms.getAllConversions(49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let kilograms = new Mass("kilogram", [
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "ton",
    ]);
    assert.notStrictEqual(kilograms.getStandardConversion(1), "");
  });
});