describe('Constructor', () => {
    it("Should check constructor", () => {
        class Person {
            constructor() {
                console.log("Hello Person");
            }
        }

        new Person();
        new Person();
    })
});