import {MathUtil} from "../../src/oop/namespace";

describe("Namespace", () => {
    it("Should check namespace", () => {
        console.log(MathUtil.PI);
        console.log(MathUtil.sum(1, 2, 3, 4, 5));
    })
})