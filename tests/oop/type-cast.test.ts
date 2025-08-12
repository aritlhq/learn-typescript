describe("Type Cast", () => {
    it("Should check type cast", () => {
        class Employee {
            constructor(public name: string) {
            }
        }

        class Manager extends Employee {
        }

        class VicePresident extends Employee {
        }

        let employee: Employee = new Employee("John Doe");
        employee = new Manager("Jane Doe");
        employee = new VicePresident("Bob Doe");

        function sayHello(employee: Employee): void {
            if (employee instanceof VicePresident) {
                const vp = employee as VicePresident;
                console.log(`Hello ${vp.name}, I'm Vice President`);
            } else if (employee instanceof Manager) {
                const manager = employee as Manager;
                console.log(`Hello ${manager.name}, I'm Manager`);
            } else {
                console.log(`Hello ${employee.name}`);
            }
        }

        sayHello(employee);
    })
})