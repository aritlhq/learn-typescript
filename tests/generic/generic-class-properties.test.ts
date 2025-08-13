import {SimpleGeneric} from "../../src/generic/generic-class-properties";

describe('Generic Class Without Constructor Parameters', () => {
    it("Should check generic class without constructor parameters", () => {
        const simple = new SimpleGeneric();

        simple.setValue("John Doe");
        console.log(simple.getValue());

        expect(simple.getValue()).toEqual("John Doe");
        expect(simple.getValue()).toEqual("John Doe");

    })
});