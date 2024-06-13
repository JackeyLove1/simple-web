const baseURL = 'https://www.baidu.com';

const getArraySum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

module.exports = {
    baseURL,
    getArraySum
}