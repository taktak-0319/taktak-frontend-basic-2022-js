const echoDiv = (x, y) => {
    return "商: " + ((x / y) | 0) + ", 余り: " + (x % y);
};

const reply = (x) => {
    if (x === undefined) {
        return "返信なし";
    }
    return x;
};

module.exports = { echoDiv, reply };