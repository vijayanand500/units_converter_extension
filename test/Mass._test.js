var assert = require("assert");

const Mass = require("../code/conversions/Mass");

describe("Mass", function () {
  it("Conversions should not be empty", function () {
    let kilograms = new Mass("kilograms", [
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(kilograms.getAllConversions(49, 2), "");
    assert.notStrictEqual(kilograms.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let kilograms = new Mass("kilograms", [
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(kilograms.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let grams = new Mass("grams", [
      "kilograms",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(grams.getAllConversions(49, 2), "");
    assert.notStrictEqual(grams.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let grams = new Mass("grams", [
      "kilograms",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(grams.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let pound = new Mass("pound", [
      "kilograms",
      "grams",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(pound.getAllConversions(49, 2), "");
    assert.notStrictEqual(pound.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let pound = new Mass("pound", [
      "kilograms",
      "grams",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(pound.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let tonne = new Mass("tonne", [
      "kilograms",
      "grams",
      "pound",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(tonne.getAllConversions(49, 2), "");
    assert.notStrictEqual(tonne.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let tonne = new Mass("tonne", [
      "kilograms",
      "grams",
      "pound",
      "milligrams",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(tonne.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let milligrams = new Mass("milligrams", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(milligrams.getAllConversions(49, 2), "");
    assert.notStrictEqual(milligrams.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let milligrams = new Mass("milligrams", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "micrograms",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(milligrams.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let micrograms = new Mass("micrograms", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(micrograms.getAllConversions(49, 2), "");
    assert.notStrictEqual(micrograms.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let micrograms = new Mass("micrograms", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "ounces",
      "tonss",
    ]);
    assert.notStrictEqual(micrograms.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let ounces = new Mass("ounces", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "tonss",
    ]);
    assert.notStrictEqual(ounces.getAllConversions(49, 2), "");
    assert.notStrictEqual(ounces.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let ounces = new Mass("ounces", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "tonss",
    ]);
    assert.notStrictEqual(ounces.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let tonss = new Mass("tonss", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
    ]);
    assert.notStrictEqual(tonss.getAllConversions(49, 2), "");
    assert.notStrictEqual(tonss.getAllConversions(-49, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let tonss = new Mass("tonss", [
      "kilograms",
      "grams",
      "pound",
      "tonne",
      "milligrams",
      "micrograms",
      "ounces",
    ]);
    assert.notStrictEqual(tonss.getStandardConversion(1), "");
  });
});