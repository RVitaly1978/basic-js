module.exports = function repeater(str, options) {
    let baseStr = String(str);
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = String(options.addition);
    let additionRepeatTimes = options.additionRepeatTimes || 0;
    let additionSeparator = options.additionSeparator || '|';

    function makeRepeatingStr(repStr, repTimes, repSeparator) {
        if (repStr === 'undefined') {
            return '';
        }

        if ((!Number.isInteger(repTimes))
            || repTimes <= 0) {
            return repStr;
        }

        return Array(repTimes).fill(repStr).join(repSeparator);
    }

    const fullStr = baseStr + makeRepeatingStr(addition, additionRepeatTimes, additionSeparator);
    return makeRepeatingStr(fullStr, repeatTimes, separator);
};
  