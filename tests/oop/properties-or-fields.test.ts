describe("Properties or Fields", () => {
    it("Should check properties or fields", () => {
        class Customer {
            readonly id: number;
            name: string;
            age?: number;

            constructor(id: number, name: string) {
                this.id = id;
                this.name = name;
            }
        }

        const customer: Customer = new Customer(4, "John Doe");
        customer.age = 30;

        console.log(customer);
    })
})