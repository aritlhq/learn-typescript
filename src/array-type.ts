/*
Mutable array
Immutable array
 */

const mutableNumbers: number[] = [1, 2, 3, 4, 5];
mutableNumbers[0] = 3;
console.log(mutableNumbers);

const immutableNumbers: readonly number[] = [1, 2, 3, 4, 5];
console.log(immutableNumbers);