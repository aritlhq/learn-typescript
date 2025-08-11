describe("'Union Data Type'", () => {
    it("Should check union", () => {
        function process(value: string | number | boolean) {
            if (typeof value === "string") {
                return value.toLowerCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value
            }
        }

        expect(process(100)).toBe(102);
        expect(process("John Doe")).toBe("john doe");
        expect(process(true)).toBe(false);
    })
})