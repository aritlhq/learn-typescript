describe('Do While Loop', () => {
    it("Should check do while loop", () => {
        let i = 0;

        do {
            console.log(i);
            i++
        } while (i < 10);

        expect(i).toBe(10);
    })
});