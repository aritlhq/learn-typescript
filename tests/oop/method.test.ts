describe('Method', () => {
    it("Should check method", () => {
        class Person {
            readonly id: number
            name: string
            age?: number

            constructor(id: number, name: string) {
                this.id = id;
                this.name = name;
            }

            sayHello(name: string): void {
                console.log(`Hello ${name}`);
            }
        }

        const person: Person = new Person(1, "John Doe");
        console.log(person);

        person.sayHello("Jane Doe");
    });
});