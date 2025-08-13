import {SimpleGeneric} from "../../src/generic/generic-parameter-default";

describe('Generic Parameter Defaults', () => {
    it("Should check generic parameter defaults", () => {
        const simple = new SimpleGeneric();
        simple.setValue("John Doe");

        console.log(simple.getValue());
        console.log(simple.getValue()!.toUpperCase());

        expect(simple.getValue()).toEqual("John Doe");
        expect(simple.getValue()!.toUpperCase()).toBe("JOHN DOE");
    })
});