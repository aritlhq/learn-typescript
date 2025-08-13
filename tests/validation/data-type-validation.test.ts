import {z} from "zod";

describe('Data Type Validation (String, Number, Boolean)', () => {
    it('Should check data type validation', () => {
        const emailValidation = z.string().email()
        const isAdminValidation = z.boolean()
        const priceValdiaton = z.number().min(1000).max(1000000)

        const email = emailValidation.parse("jane.doe@me.com")
        console.log(email);

        const isAdmin = isAdminValidation.parse(true);
        console.log(isAdmin);

        const price = priceValdiaton.parse(1000000)
        console.log(price);
    })
});