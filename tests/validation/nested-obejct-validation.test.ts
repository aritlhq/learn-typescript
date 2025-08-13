import {z, ZodError} from "zod";

describe('Nested Object Validation', () => {
    it('Should check nested object validation', () => {
        const createUserSchema = z.object({
            id: z.string().max(100),
            name: z.string().max(100),
            address: z.object({
                street: z.string().max(100),
                zip: z.string().max(100),
                country: z.string().max(100),
            })
        })

        const request = {
            id: "1",
            name: "John Doe",
            address: {
                street: "123 Main St",
                city: "Anytown",
                zip: "12345",
                country: "USA"
            }
        }

        const result = createUserSchema.parse(request);
        console.log(result);
    })
});