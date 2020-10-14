
var assert = require("assert");

const Currency = require("../code/conversions/Currency");

describe("Currency", function () {
    let usd = new Currency("USD", [
        "eur",
        "gbp",
        "inr",
        "jpy",
        "cad",
        "aud",
        "chf"
    ]);
    it("Conversions should not be empty", function () {
        assert.notStrictEqual(usd.getAllConversions(30.99, 2), "");
    });

    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(usd.getStandardConversion(30), "");
    });

    let eur = new Currency("EUR", ["usd", "gbp", "inr", "jpy", "cad", "aud", "chf"]);
    it("Conversions in EUR", function () {
        assert.notStrictEqual(eur.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in EUR", function () {
        assert.notStrictEqual(eur.getStandardConversion(30), "");
    }
    );

    let gbp = new Currency("GBP", ["usd", "eur", "inr", "jpy", "cad", "aud", "chf"]);
    it("Conversions in GBP", function () {
        assert.notStrictEqual(gbp.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in GBP", function () {
        assert.notStrictEqual(gbp.getStandardConversion(30), "");
    }
    );

    let inr = new Currency("INR", ["usd", "eur", "gbp", "jpy", "cad", "aud", "chf"]);
    it("Conversions in INR", function () {
        assert.notStrictEqual(inr.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in INR", function () {
        assert.notStrictEqual(inr.getStandardConversion(30), "");
    }
    );

    let jpy = new Currency("JPY", ["usd", "eur", "gbp", "inr", "cad", "aud", "chf"]);
    it("Conversions in JPY", function () {
        assert.notStrictEqual(jpy.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in JPY", function () {
        assert.notStrictEqual(jpy.getStandardConversion(30), "");
    }
    );

    let cad = new Currency("JPY", ["usd", "eur", "gbp", "inr", "jpy", "aud", "chf"]);
    it("Conversions in CAD", function () {
        assert.notStrictEqual(cad.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in CAD", function () {
        assert.notStrictEqual(cad.getStandardConversion(30), "");
    }
    );

    let aud = new Currency("JPY", ["usd", "eur", "gbp", "inr", "jpy", "cad", "chf"]);
    it("Conversions in AUD", function () {
        assert.notStrictEqual(aud.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in AUD", function () {
        assert.notStrictEqual(aud.getStandardConversion(30), "");
    }
    );

    let chf = new Currency("JPY", ["usd", "eur", "gbp", "inr", "jpy", "cad", "aud"]);
    it("Conversions in CHF", function () {
        assert.notStrictEqual(chf.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in CHF", function () {
        assert.notStrictEqual(chf.getStandardConversion(30), "");
    }
    );



});