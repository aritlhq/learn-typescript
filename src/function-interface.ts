/*
Function Interface
 */

interface AddFunction {
    (value1: number, value2: number): number
}

const add: AddFunction = function (value1: number, value2: number) {
    return value1 + value2
}

console.log(add(10, 20));