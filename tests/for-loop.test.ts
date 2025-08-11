describe('For Loop', () => {
    it("Should check for loop", () => {
        const names: string[] = ["John Doe", "Jane Doe", "Bob Doe"];

        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

        // for of
        console.log("===== for of =====");
        for (const name of names) {
            console.log(name);
        }

        // for in
        console.log("===== for in =====");
        for (const index in names) {
            console.log(names[index]);
        }
    })
});