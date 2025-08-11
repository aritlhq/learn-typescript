describe("Ternary Operator", () => {
    it("Should check ternary operator", () => {
        const value = 10;
        const say = value > 7 ? "Greater than 7" : "Less than 7";

        console.log(say);
        expect(say).toBe("Greater than 7");
    })
})