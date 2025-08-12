describe("Problem with typeof", () => {
    it("Should check problem with typeof", () => {
        class Employee {
        }

        class Manager {
        }

        const budi: Employee = new Employee()
        const joko: Manager = new Manager()

        console.log(typeof budi);
        console.log(typeof joko);

        expect(typeof budi).toBe("object");
        expect(typeof joko).toBe("object");
    })
})