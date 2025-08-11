describe("Default Property Values", () => {
    it("Should check default property values", () => {
        class Person {
            readonly id: number
            name: string = "Guest"
            age?: number

            constructor(id: number, name: string) {
                this.id = id;
                if (name) {
                    this.name = name;
                }

            }
        }

        const person: Person = new Person(1);
        console.log(person);

        person.name = "John Doe";
        console.log(person);
    })
})