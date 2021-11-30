// JS Exercises:

// 1)
function square(arr){
    let newArr = arr.map((int) => int * int)
    return newArr
}

// 2)
function countMe(arr){
    let sum = arr.map(item => item.count).reduce((prev, curr) => prev + curr, 0)
    return sum
}

// 3)
