/*
Generic Parameter Default
 */

export class SimpleGeneric<T = string> {
    private value?: T

    setValue(value: T) {
        this.value = value
    }

    getValue(): T | undefined {
        return this.value
    }
}