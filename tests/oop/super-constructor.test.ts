describe("Super Constructor", () => {
    it("Should check super constructor", () => {
        class Person {
            name: string;

            constructor(name: string) {
                this.name = name;
            }
        }

        class Employee extends Person {
            department: string;

            constructor(name: string, department: string) {
                super(name);
                this.department = department
            }
        }

        const employee: Employee = new Employee("John Doe", "IT");
        console.log(employee);
    })
});