/**
 * speed class is use for 
 */
class Speed{
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }
    /**
     * 
     * @param {Number} number 
     * @returns precise length value
     */
    getPrecision(number) {
        let parts = number.toString().split(".");
        if (parts.length <= 1) {
            return number < 0 ? parts[0].length - 1 : parts[0].length;
        }
        let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
        return intlen + parts[1].length;
    }

    getPreciseNumber(number, precision) {
        return number.toPrecision(
            Math.min(Math.max(this.getPrecision(number), precision), 10)
        );
    }

    getStandardConversion(quantity) {
        switch (this.unit.toLowerCase()) {
            case "m/s": return quantity;
            case "km/h": return quantity / 3.6;
            case "mph": return quantity / 2.2369362920544025;
            default: return null;
        }
    }

    getAllConversions(quantity, precision) {
        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "m/s": {
                    res += "," +this.getPreciseNumber(quantity,precision) + " M/s";
                    break;
                }
                case "km/h": {
                    let conv = quantity * 3.6;
                    res += "," + this.getPreciseNumber(conv, precision) + " Km/h";
                    break;
                }
                case "mph": {
                    let conv = quantity * 2.2369362920544025;
                    res += ","+ this.getPreciseNumber(conv, precision) + " Mph";
                    break;
                }
            }
        });
        console.log(res);
        return res;
    }
}

module.exports = Speed;
