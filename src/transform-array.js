module.exports = function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error('arr is not Array');
    }

    if (arr.length === 0) {
        return [];
    }

    const result = [];

    arr.forEach((item, index) => {
        if (item === '--discard-prev') {
            if (index > 0) {
                result.pop();
            }
        } else if (item === '--double-prev') {
            if (index > 0) {
                result.push(arr[index - 1]);
            }
        } else if (item === '--double-next') {
            if (arr.length - 1 > index) {
                result.push(arr[index + 1]);
            }
        } else if ((item !== '--discard-next')
            && ((index === 0) || (arr[index - 1] !== '--discard-next'))) {
            result.push(item);
        }
    });

    return result;
};
