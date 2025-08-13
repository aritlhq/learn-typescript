/*
Generic Class Without Constructor Parameters
 */

export class SimpleGeneric<T> {
    private value?: T

    setValue(value: T) {
        this.value = value
    }

    getValue(): T | undefined {
        return this.value
    }
}