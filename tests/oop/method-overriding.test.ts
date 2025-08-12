describe("Method Overriding", () => {
    it("Should check method overriding", () => {
        class Employee {
            name: string;

            constructor(name: string) {
                this.name = name;
            }

            sayHello(name: string): void {
                console.log(`Hello ${name}, my name is ${this.name}`);
            }
        }

        class Manager extends Employee {
            sayHello(name: string): void {
                console.log(`Hello ${name}, my name is ${this.name}, I'm a manager`);
            }
        }

        const employee: Employee = new Employee("John Doe");
        const manager: Manager = new Manager("Jane Doe");

        employee.sayHello("John Doe");
        manager.sayHello("Jane Doe");

        expect(employee.name).toEqual("John Doe");
        expect(manager.name).toEqual("Jane Doe");
    })
})