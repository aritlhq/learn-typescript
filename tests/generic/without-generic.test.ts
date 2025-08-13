import {Data} from "../../src/generic/without-generic";

describe("Without Generic", () => {
    it("Should check without generic", () => {
        const data: Data = new Data("1213")

        data.value = "Jane Doe";
        data.value = true;

        console.log(data);
    })
})