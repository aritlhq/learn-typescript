describe("Generic Function", () => {
    it("Should check generic function", () => {
        function create<T>(value: T): T {
            return value
        }

        const resultString = create<string>("Hello");
        console.log(resultString);
        console.log(typeof resultString);

        const resultNumber = create<number>(11212324)
        console.log(resultNumber);
        console.log(typeof resultNumber);

    })
})