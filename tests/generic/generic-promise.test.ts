describe('Generic Promise', () => {
    it("Should check generic promise", async () => {
        async function fetchData(value: string): Promise<string> {
            return new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    if (value === "Jhon Doe") {
                        resolve("Jhon Doe" + value);
                    } else {
                        reject("Jhon Doe");
                    }
                }, 1000)
            });
        }

        const result = await fetchData("Jhon Doe");
        console.log(result);

        try {
            await fetchData("error");
        } catch (error) {
            console.log(error);
        }

    })
});