class Area{
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

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

    //Our standard conversion is square meter, so we try to convert all selection to square meter
    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion
        switch (this.unit.toLowerCase()) {
            case "m2": return quantity;
            case "cm2": return quantity / 100;
            case "km2": return quantity * 1000000;
            case "miles2": return quantity * 2590000;
            case "ft2": return quantity * 0.092903;
            case "in2": return quantity * 0.00064516;
            case "ha2": return quantity * 10000;
            case "acre2": return quantity * 4046.86;
            case "yd2": return quantity * 0.836127;
            default: return null;
        }
    }

    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "m2": {
                    res += "," +this.getPreciseNumber(quantity,precision) + " m2";
                    break;
                }
                case "cm2": {
                    let conv = quantity * 100;
                    res += "," + this.getPreciseNumber(conv, precision) + " cm2";
                    break;
                }
                case "km2": {
                    let conv = quantity / 1000000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " km2";
                    break;
                }
                case "miles": {
                    let conv = quantity / 2590000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " miles";
                    break;
                }
                case "ft2": {
                    let conv = quantity / 0.092903;
                    res += ","+ this.getPreciseNumber(conv, precision) + " ft2";
                    break;
                }
                case "in2": {
                    let conv = quantity / 0.00064516;
                    res += ","+ this.getPreciseNumber(conv, precision) + " in2";
                    break;
                }
                case "ha2": {
                    let conv = quantity / 10000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " ha2";
                    break;
                }
                case "acre2": {
                    let conv = quantity / 4046.86;
                    res += ","+ this.getPreciseNumber(conv, precision) + " acre2";
                    break;
                }
                case "yd2": {
                    let conv = quantity / 0.836127;
                    res += ","+ this.getPreciseNumber(conv, precision) + " yd2";
                    break;
                }
            }
        });
        console.log(res);
        return res;
    }
}

module.exports = Area;
