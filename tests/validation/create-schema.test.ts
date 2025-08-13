import {z} from "zod";

describe('Validaton - Create Schema', () => {
    it('Should check create schema', () => {
        const schema = z.string().min(3).max(100);
        const request = "Jane Doe";
        const result = schema.parse(request)

        console.log(result);
    });
});