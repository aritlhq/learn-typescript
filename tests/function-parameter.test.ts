describe('Function Parameter', () => {
    it("Should check function parameter", () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("John Doe")).toBe("Hello John Doe");
    })

    it("Should check function parameter", () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total = total + value;
            }

            return total;
        }

        expect(sum(1, 2, 3)).toBe(6);
    })
});