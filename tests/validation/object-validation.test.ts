import {z, ZodError} from "zod";

describe('Object Validation', () => {
    it('Should check object validation', () => {
        const loginSchema = z.object({
            username: z.string().email(),
            password: z.string().min(6).max(20)
        })

        const request = {
            username: "jane.doe@me.com",
            password: "123456",
            ignore: "ignore"
        }

        const result = loginSchema.parse(request);
        console.log(result);
    })
});