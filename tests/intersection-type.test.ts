import type {Person} from "../src/intersection-type";

describe('Intersection Type', () => {
    it("Should check intersection", () => {
        const person: Person = {
            name: "John Doe",
            age: 30
        }

        console.log(person);
        console.log(person.name);
        console.log(person.age);

        expect(person.name).toBe("John Doe");
        expect(person.age).toBe(30);
    })
});