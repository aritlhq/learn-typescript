describe("Abstract Class", () => {
    it("Should check abstract class", () => {
        abstract class Customer {
            readonly id: number
            abstract name: string

            constructor(id: number) {
                this.id = id
            }

            abstract sayHello(name: string): void
        }

        class RegularCustomer extends Customer {
            name: string

            constructor(id: number, name: string) {
                super(id);
                this.name = name;
            }

            sayHello(name: string): void {
                console.log(`Hello ${name}, my name is ${this.name}`);
            }
        }

        const customer: RegularCustomer = new RegularCustomer(1, "John Doe");
        customer.sayHello("John Doe");

        console.log(customer);
    })
});