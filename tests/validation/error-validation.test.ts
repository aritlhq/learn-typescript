import {z, ZodError} from "zod";

describe('Error Validation', () => {
    it('Should check error validation', () => {
        const emailValidation = z.string().email().min(3).max(100);

        try {
            emailValidation.parse("jane.doe")
        } catch (error) {
            if (error instanceof ZodError) {
                console.log(error);
            }
        }
    })
});