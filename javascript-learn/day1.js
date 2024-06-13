let arr = [4, 5, 6, 7, 8];
arr.sort(function (a, b) {
    return a - b
})

console.log(arr)

let obj = {
    username: "jacky",
    age: 18,
    sex: "man",
}

for (let k in obj) {
    console.log(k, " : ", obj[k])
}