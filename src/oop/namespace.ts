export namespace MathUtil {
    export const PI: number = 3.14;

    export function sum(...values: number[]): number {
        let total = 0;

        for (let value of values) {
            total = total + value;
        }

        return total;
    }
}