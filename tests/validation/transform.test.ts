import {z} from "zod";

describe('Transform', () => {
    it('Should check transform', () => {
        const schema = z.string().transform((data) => {
            return data.toUpperCase()
        })
        const result = schema.parse("jane Doe")
        console.log(result);
    })
});