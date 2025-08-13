import {z, ZodError} from "zod";

describe('Custom Validation Message', () => {
    it('Should custom validation message', () => {
        const loginSchemaValidation = z.object({
            username: z.string().email("Username must be a valid email"),
            password: z.string().min(6, "Password must be at least 6 characters")
                .max(20, "Password must be at most 20 characters")
        })
        const request = {
            username: "jane.doe@me.com",
            password: "12345" // Error
        }

        try {
            loginSchemaValidation.parse(request)
        } catch (e) {
            if (e instanceof ZodError) {
                console.log(e.message);
            }
        }
    })
});