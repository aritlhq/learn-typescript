import type {Person} from "../../src/basic/intersection-type";

describe('Type Assertion', () => {
    it("Should check type assertion", () => {
        const person: any = {
            name: "John Doe",
            age: 30
        }

        const personName = person.name as string;
        const personAge = person.age as number;

        console.log(personName);
        console.log(personAge);
    })

    it("Should check type assertion", () => {
        const person: any = {
            name: "John Doe",
            age: 30
        }

        const personIdentity: Person = person as Person;
        console.log(personIdentity);
    })
});