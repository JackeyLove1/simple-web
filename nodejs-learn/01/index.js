const path = require('path');
const fs = require('fs');

const utils = require(path.join(__dirname, 'utils'))

console.log(utils)

console.log("sum: ", utils.getArraySum([1, 2, 3, 4, 5]))