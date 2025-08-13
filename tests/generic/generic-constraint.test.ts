import type {Employee, Manager, VicePresident} from "../../src/generic/generic-constraint";

describe('Generic Constraint', () => {
    it("Should check generic constraint", () => {
        class EmployeeData<T extends Employee> {
            constructor(public employee: T) {
            }
        }

        const dataOne = new EmployeeData<Employee>({
            id: "1",
            name: "John Doe"
        })

        console.log(dataOne);

        const dataTwo = new EmployeeData<Manager>({
            id: "1",
            name: "John Doe",
            totalEmployees: 10
        })

        console.log(dataTwo);

        const dataThree = new EmployeeData<VicePresident>({
            id: "1",
            name: "John Doe",
            totalEmployees: 10,
            totalManagers: 3220
        })

        console.log(dataThree);
    })
});