describe("Parameter Properties", () => {
    it("Should check parameter properties", () => {
        class Person {
            constructor(public name: string = "") {
            }
        }

        const person: Person = new Person("John Doe");
        console.log(person);

        expect(person.name).toEqual("John Doe");
    })
})