describe("Polymorphism", () => {
    it("Should check polymorphism", () => {
        class Employee {
            constructor(public name: string) {
            }
        }

        class Manager extends Employee {
        }

        class VicePresident extends Manager {
        }

        let employee: Employee = new Employee("John Doe");
        console.log(employee);

        employee = new Manager("Jane Doe");
        console.log(employee);

        employee = new VicePresident("Bob Doe");
        console.log(employee);

        function sayHello(employee: Employee): void {
            console.log(`Hello ${employee.name}`);
        }

        sayHello(new Employee("John Doe"));
        sayHello(new Manager("Jane Doe"));
        sayHello(new VicePresident("Bob Doe"));
    })
})