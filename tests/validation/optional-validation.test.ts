import {z} from "zod";

describe('Optional Validation', () => {
    it('Should check optional validation', () => {
        const registerSchemaValidation = z.object({
            username: z.string().email(),
            password: z.string().min(6).max(20),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100),
            age: z.number().min(18).max(100).optional(),
        })
        const request = {
            username: "jane.doe@me.com",
            password: "123456",
            firstName: "Jane",
            lastName: "Doe",
        }
        const result = registerSchemaValidation.parse(request)
        console.log(result);
    })
});