describe('While Loop', () => {
    it("Should check while loop", () => {
        let i = 0
        while (i < 10) {
            console.log(i);
            i++
        }

        expect(i).toBe(10);
    })
});