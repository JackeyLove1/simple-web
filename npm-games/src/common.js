const arr = [1, 2, [4, 5], 6, 7, [8]]
const result =
    arr.map(item => Array.isArray(item) ? item : [item]).flat()
console.log(result)

console.log(arr.flat())

const numbers = [9, 3, 6, 4, 8, 1, 2, 5, 7];

console.log(
    numbers
        .filter(item => item % 2 === 0)
        .map(item => item ** 3)
        .sort((a, b) => a - b)
)

import axios from "axios";

function syncGetTodos(){
    axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
    ).then(response => {
        const items = response.data.filter(
            item => item.completed === true
        )
        console.log(items)
    }).catch(error => {
        console.log(error)
    })
}

async function getTodos() {
    try{
        const items = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/"
        )
        console.log(items.filter(item => item.completed === true))
    }catch (error){
        console.log(error)
    }
}

// await getTodos()

function deepcopy(){
    const obj = { name: 'Mike', friends: [{ name: 'Sam' }] };
    const clone = structuredClone(obj)
    console.log(clone === obj)
}

deepcopy()

