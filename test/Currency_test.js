
var assert = require("assert");

const Currency = require("../code/conversions/Currency");

describe("Currency", function () {
    let usd = new Currency("USD", [
        "usd",
        "eur",
        "gbp",
        "inr",
        "jpy",
        "cad",
        "aud",
        "chf",
        "cny"
    ]);
    it("Conversions should not be empty", function () {
        let res = usd.getAllConversions(30.99, 2);
        assert.notStrictEqual(res, "");
    });

    it("Standard Conversions should not be empty", async function () {
        let res = await usd.getStandardConversion(30);
        assert.notStrictEqual(res, 0);
    });

    let eur = new Currency("EUR", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in EUR", function () {
        let res = eur.getAllConversions(49.94, 2);
        assert.notStrictEqual(res, "");
    }
    );
    it("Standard Conversions in EUR", async function () {
        let res = await eur.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let gbp = new Currency("GBP", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in GBP", function () {
        assert.notStrictEqual(gbp.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in GBP", async function () {
        let res = await gbp.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let inr = new Currency("INR", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in INR", function () {
        assert.notStrictEqual(inr.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in INR", async function () {
        let res = await inr.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let jpy = new Currency("JPY", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in JPY", function () {
        assert.notStrictEqual(jpy.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in JPY", async function () {
        let res = await jpy.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let cad = new Currency("CAD", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in CAD", function () {
        assert.notStrictEqual(cad.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in CAD", async function () {
        let res = await cad.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let aud = new Currency("AUD", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in AUD", function () {
        assert.notStrictEqual(aud.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in AUD", async function () {
        let res = await aud.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let chf = new Currency("CHF", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in CHF", function () {
        assert.notStrictEqual(chf.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in CHF", async function () {
        let res = await chf.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

    let cny = new Currency("CNY", ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf", "cny"]);
    it("Conversions in CNY", function () {
        assert.notStrictEqual(cny.getAllConversions(49.94, 2), "");
    }
    );
    it("Standard Conversions in CNY", async function () {
        let res = await cny.getStandardConversion(30)
        assert.notStrictEqual(res, "");
    }
    );

});