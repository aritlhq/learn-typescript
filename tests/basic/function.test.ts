describe("Function", () => {
    it("Should check function", () => {
        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello("John Doe")).toBe("Hello John Doe")

        function printHello(name: string): void {
            console.log(`Hello ${name}`);
        }

        printHello("John Doe");
    })
})