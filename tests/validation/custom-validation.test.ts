import {z} from "zod";

describe('Transform', () => {
    it('Should check transform', () => {
        const loginSchemaValidation = z.object({
            username: z.string().email().transform((data, ctx) => {
                if (data != data.toUpperCase()) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "Username must be in uppercase"
                    })

                    return z.NEVER
                } else {
                    return data
                }
            }),
            password: z.string().min(6).max(20)
        })
        const request = {
            username: "jane.doe@me.com", // Error
            password: "123456",
        }
        const result = loginSchemaValidation.parse(request)
        console.log(result);
    })
});