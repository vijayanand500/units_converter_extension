//Our temperature class handles all temperature related conversions
class Temperature {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    //Our standard conversion is celcius, so we try to convert all selection to celcius
    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion
        switch (this.unit.toLowerCase()) {
            case "celcius": return quantity;
            case "kelvin": return quantity - 273.15;
            case "fahrenheit": return ((quantity - 32) / 9) * 5;
        }
    }

    /*From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10*/
    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "celcius": res += "," + this.getPreciseNumber(quantity,precision) + " °C"; break;
                case "kelvin": {
                    let conv = quantity + 273.15;
                    res += "," + this.getPreciseNumber(conv, precision) + " °K";
                    break;
                }
                case "fahrenheit": {
                    let conv = (quantity / 5) * 9 + 32;
                    res += ","+ this.getPreciseNumber(conv, precision) + " °F";
                    break;
                }
            }
        });

        return res;
    }

    getPreciseNumber(number, precision){
        return number.toPrecision(
            Math.min(Math.max(this.getPrecision(number), precision), 10)
        );
    }

    getPrecision(number) {
        let parts = number.toString().split(".");
        if (parts.length <= 1) {
            return number < 0 ? parts[0].length - 1 : parts[0].length;
        }
        let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
        return intlen + parts[1].length;
    }
}

module.exports = Temperature;