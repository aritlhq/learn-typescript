describe("Interface Inheritance", () => {
    it("Should check interface inheritance", () => {
        interface HasName {
            name: string
        }

        interface CanSayHello {
            sayHello(name: string): void;
        }

        class Person implements HasName, CanSayHello {
            name: string;

            constructor(name: string) {
                this.name = name;
            }

            sayHello(name: string): void {
                console.log(`Hello ${name}, my name is ${this.name}`);
            }
        }

        const person: Person = new Person("John Doe");
        person.sayHello("Jane Doe");
    })
})