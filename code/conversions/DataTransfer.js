class DataTransfer{
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

    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion

        switch (this.unit.toLowerCase()) {
            case "b/s": return quantity;
            case "kb/s": return quantity * 1000;
            case "mb/s": return quantity * 1000000;
			case "gb/s": return quantity * 1000000000;
			case "tb/s": return quantity * 1000000000000;
            default: return null;
        }
    }

    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "b/s": {
                    res += "," +this.getPreciseNumber(quantity,precision) + " b/s";
                    break;
                }
                case "kb/s": {
                    let conv = quantity / 1000;
                    res += "," + this.getPreciseNumber(conv, precision) + " Kb/s";
                    break;
                }
                case "mb/s": {
                    let conv = quantity / 1000000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " Mb/s";
                    break;
                }
                case "gb/s": {
                    let conv = quantity * 1000000000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " Gb/s";
                    break;
                }
                case "tb/s": {
                    let conv = quantity * 1000000000000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " Tb/s";
                    break;
                }
            }
        });
        console.log(res);
        return res;
    }
}

module.exports = DataTransfer;
