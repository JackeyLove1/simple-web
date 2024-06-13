const fs = require("fs")
fs.writeFile("./test.txt", "Hello, Node.js", err => {
    if (err) console.log(err)
    else console.log("write success!")
})

fs.readFile("./test.txt", "utf8", (err, data) => {
    if (err) console.log(err)
    else console.log("read data: ", data)
})

