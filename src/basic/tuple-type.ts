/*
Mutable tuple
Immutable tuple
 */

const mutableTupple: [string, number] = ["John Doe", 30];
mutableTupple[0] = "Jane Doe";
console.log(mutableTupple);

const imutableTupple: readonly [string, number] = ["John Doe", 30];
console.log(imutableTupple);