const sum = (x, y) => {
    total = 0;
    if (x >= y) {
        for (i = 0; x >= y; y++) {
            total += y;
        }
    } else if (x < y) {
        for (i = 0; x <= y; x++) {
            total += x;
        }
    }
    return total;
};
module.exports = { sum };