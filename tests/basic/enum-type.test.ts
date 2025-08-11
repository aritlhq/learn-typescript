import {type Customer, CustomerStatus, CustomerType} from "../../src/basic/enum-type";

describe("Enum Data Type", () => {
    it("Should check enum", () => {
        const customer: Customer = {
            name: "John Doe",
            age: 30,
            type: CustomerType.GOLD,
            status: CustomerStatus.ACTIVE
        }

        console.log(customer);

        expect(customer.name).toBe("John Doe");
        expect(customer.age).toBe(30);
        expect(customer.type).toBe(CustomerType.GOLD);
        expect(customer.status).toBe("ACTIVE");
    })
})