describe("Function as a Parameter", () => {
    it("Should check function as a parameter", () => {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("John Doe", toUpper)).toBe("Hello JOHN DOE");

        // Anonymous function
        expect(sayHello("John Doe", function (name: string): string {
            return name.toUpperCase();
        })).toBe("Hello JOHN DOE");

        // Arrow function
        expect(sayHello("John Doe", (name: string): string => name.toUpperCase())).toBe("Hello JOHN DOE");
    })
})