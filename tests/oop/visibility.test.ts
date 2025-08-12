describe("Visibility", () => {
    it("Should check visibility", () => {
        class Counter {
            // private  counter: number = 0;
            protected counter: number = 0;

            public increment(): void {
                this.counter++;
            }

            public getCounter(): number {
                return this.counter
            }
        }

        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();

        console.log(counter.getCounter());

        // Double counter
        class DoubleCounter extends Counter {
            public increment(): void {
                this.counter += 2;
            }
        }

        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        doubleCounter.increment();

        console.log(doubleCounter.getCounter());
    })
})