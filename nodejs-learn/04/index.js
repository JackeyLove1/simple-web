const lodash = require('lodash');
console.log(lodash.max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const dayjs = require('dayjs');
const now = dayjs();
console.log(now)

console.log(dayjs("2024-01-01"))
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"))