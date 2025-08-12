describe("Static", () => {
    it('Should check static', () => {
        // Static properties
        class Person {
            static NAME: string = "John Doe";
            static AGE: number = 30;
            static GENDER: string = "Male";
        }

        console.log(Person.NAME);
        console.log(Person.AGE);
        console.log(Person.GENDER);

        // Static methods
        class MathUtil {
            static sum(...values: number[]): number {
                let total = 0;

                for (let value of values) {
                    total = total + value;
                }

                return total;
            }
        }

        console.log(MathUtil.sum(1, 2, 3, 4, 5));
    });
})