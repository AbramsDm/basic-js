const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  const arrayPositive = arr.filter(item => item !== -1);
  const sortArray = arrayPositive.sort((a, b) => a - b);
  let count = 0;
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
          resultArray.push(-1);
      } else {
          resultArray.push(sortArray[count]);
          count ++;
      }
  }
  return resultArray;
}

module.exports = {
  sortByHeight
};
