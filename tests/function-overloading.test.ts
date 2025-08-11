describe("Function Overloading", () => {
    it("Should check function overloading", () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === "number") {
                return value + 2;
            } else if (typeof value === "string") {
                return value.toLowerCase();
            }
        }

        expect(callMe(100)).toBe(102);
        expect(callMe("John Doe")).toBe("john doe");
    })
})