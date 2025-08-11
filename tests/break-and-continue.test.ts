describe('Break and Continue', () => {
    it("Should check break and continue", () => {
        let i = 3;

        do {
            i++

            if (i === 5) {
                break;
            }

            if (i === 3) {
                continue;
            }

            console.log(i);
        } while (true);
    })
});