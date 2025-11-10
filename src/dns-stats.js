const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const resultObj = {};
    domains.forEach(item => {
        const domain = item.split('.').reverse();
        let curr = '';
        for (let i = 0; i < domain.length; i += 1) {
            curr += '.' + domain[i];
            resultObj[curr] = (resultObj[curr] || 0) + 1;
        }
    });
    return resultObj;
}

module.exports = {
  getDNSStats
};
