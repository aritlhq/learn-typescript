describe("Switch Statement", () => {
    it("Should check switch statement", () => {
        function sayHello(name: string): string {
            switch (name) {
                case "John Doe":
                    return "Hello John Doe";
                case "Mary Doe":
                    return "Hello Mary Doe";
                default:
                    return "Hello Guest";
            }
        }

        console.log(sayHello("John Doe"));
        console.log(sayHello("Mary Doe"));

        expect(sayHello("John Doe")).toBe("Hello John Doe");
    })
})