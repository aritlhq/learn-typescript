describe("Instanceof Operator", () => {
    it("Should check instanceof operator", () => {
        class Employee {
            name: string

            constructor(name: string) {
                this.name = name
            }
        }

        class Manager extends Employee {
        }

        class VicePresident extends Manager {
        }

        const budi: Employee = new Employee("Budi")
        const joko: Manager = new Manager("Joko")

        console.log(budi instanceof Employee);
        console.log(joko instanceof Manager);

        expect(budi instanceof Employee).toBe(true);
        expect(joko instanceof Manager).toBe(true);

        // Check inheritance
        const eko: Employee = new Manager("Eko")

        console.log(eko instanceof Employee);
        console.log(eko instanceof Manager);

        expect(eko instanceof Employee).toBe(true);
        expect(eko instanceof Manager).toBe(true);
    })
})