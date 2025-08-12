describe("Error Handling", () => {
    it("Should check error handling", () => {
        class ValidationError extends Error {
            constructor(public message: string) {
                super(message);
            }
        }

        function doubleIt(value: number): number {
            if (value < 0) {
                throw new ValidationError("Value cannot be negative");
            }

            return value * 2;
        }

        try {
            const result = doubleIt(-10);
            console.log(result);
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log(error.message)
            }
        }
    })
})