/*
Multiple Generic Type
 */

export class Entry<K, V> {
    constructor(public key: K, public value: V) {
    }
}

export class Triple<X, Y, Z> {
    constructor(public first: X, public second: Y, public third: Z) {
    }
}