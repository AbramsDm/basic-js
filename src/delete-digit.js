const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const nStr = n.toString();
    let digit = 0;
    for (let i = 0; i < nStr.length; i++) {
        let newNumber = '';
        for (let j = 0; j < nStr.length; j++) {
            if (j !== i) {
                newNumber += nStr[j];
            }
        }
        const num = parseInt(newNumber);
        if (num > digit) {
            digit = num;
        }
    }
    return digit;
}

module.exports = {
  deleteDigit
};
