describe("If Statement", () => {
    it("Should check if statement", () => {
        const x = 10;

        if (x > 5) {
            console.log("x is greater than 5");
        } else {
            console.log("x is less than 5");
        }

        expect(x).toBe(10);
        expect(x > 5).toBe(true);
    })
})