import type {Employee, Manager} from "../src/extending-interface";

describe('Extending Interface', () => {
    it("Should check extending interface", () => {
        const employee: Employee = {
            name: "John Doe",
            age: 30
        }

        const manager: Manager = {
            name: "Jane Smith",
            age: 35,
            department: "IT",
            title: "Manager",
            employees: [employee]
        }

        console.log(employee);
        console.log(manager);

        expect(manager.name).toEqual("Jane Smith");
        expect(manager.age).toEqual(35);
        expect(manager.department).toEqual("IT");
        expect(manager.title).toEqual("Manager");
        expect(manager.employees[0].name).toEqual("John Doe");
        expect(manager.employees[0].age).toEqual(30);
    })

});