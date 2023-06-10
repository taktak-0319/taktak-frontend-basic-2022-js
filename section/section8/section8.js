const firstIndex = (array) => {
    return array[0];
};
const countArrayLength = (array) => {
    let x = array.length;
    if (array.length === 0) {
        return "この配列は空配列です";
    } else if (Array.isArray(array) !== true) {
        return "これは配列ではありません";
    }
    return `この配列は${x}個のデータを持っています`;
};

const extractArray = (array) => {
    return array.slice(1, 3);
};

const makeMark = (mark, number) => {
    array = [];
    for (let i = 0; i < number; i++) {
        array.push(mark);
    }
    return array;
};

const onlyString = (array) => {
    result = array.filter((currentValue, index, array) => {
        return typeof currentValue === "string";
    });
    return result;
};

const addNumber = (array) => {
    newArray = array.map((currentValue, index, array) => {
        place = array.indexOf(currentValue) + 1;
        return `${place}: ` + currentValue;
    });
    return newArray;
};

module.exports = {
    firstIndex,
    countArrayLength,
    extractArray,
    makeMark,
    onlyString,
    addNumber,
};