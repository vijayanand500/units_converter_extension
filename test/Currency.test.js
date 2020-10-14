
var assert = require("assert");
// var chai = require("chai");
// var expect = chai.expect;
// var should = chai.should();
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);

const Currency = require("../code/conversions/Currency");

describe("Currency", function () {
    let usd = new Currency("USD", [
        "eur",
        "gbp",
        "inr",
        "jpy",
        "cad",
        "aud",
        "chf",
    ]);
    it("Conversions should not be empty", function () {
        assert.notStrictEqual(usd.getAllConversions(30.99, 2), "");
    });

    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(usd.getStandardConversion(30), "");
    });

    // it("get data should not be empty", function () {
    //     assert.notStrictEqual(usd.getData('CNY'),122);
    // });

});