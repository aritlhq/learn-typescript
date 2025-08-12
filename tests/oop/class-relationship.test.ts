describe("Class Relationship", () => {
    it("Should check class relationship", () => {
        class Person {
            constructor(public name: string) {
            }
        }

        class Customer {
            constructor(public name: string) {
            }
        }

        const person: Person = new Customer("John Doe");
        console.log(person);
    })
})