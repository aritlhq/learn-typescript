import type {Person} from "../../src/basic/function-in-interface";

describe('Function in Interface', () => {
    it("Should check function in interface", () => {
        const person: Person = {
            name: "John Doe",
            sayHello: (name: string) => `Hello ${name}`
        }

        console.log(person.sayHello("Jane Doe"));

        expect(person.sayHello("Jane Doe")).toBe("Hello Jane Doe");
    })
});