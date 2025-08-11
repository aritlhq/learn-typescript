import type {AddFunction} from "../../src/basic/function-interface";

describe("Function Interface", () => {
    it("Should check function", () => {
        const add: AddFunction = function (value1: number, value2: number) {
            return value1 + value2
        }

        console.log(add(1, 2));

        expect(add(1, 2)).toBe(3);
    })
})