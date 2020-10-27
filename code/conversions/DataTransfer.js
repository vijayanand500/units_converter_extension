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
        let kbMulti = 1000;
        let MbMulti = kbMulti * 1000;
        let GbMulti = MbMulti * 1000;
        let TbMulti = GbMulti * 1000;
        switch (this.unit.toLowerCase()) {
            case "b/s": return quantity;
            case "Kb/s": return quantity * kbMulti;
            case "Mb/s": return quantity * MbMulti;
			case "Gb/s": return quantity * GbMulti;
			case "Tb/s": return quantity * TbMulti;
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
                case "Kb/s": {
                    let conv = quantity / 1609;
                    res += "," + this.getPreciseNumber(conv, precision) + " Kb/s";
                    break;
                }
                case "Mb/s": {
                    let conv = quantity / 1000;
                    res += ","+ this.getPreciseNumber(conv, precision) + " Mb/s";
                    break;
                }
                case "Gb/s": {
                    let conv = quantity * 100;
                    res += ","+ this.getPreciseNumber(conv, precision) + " Gb/s";
                    break;
                }
                case "Tb/s": {
                    let conv = quantity * 1000;
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
