import {z} from "zod";

describe('Data Type Convertion', () => {
    it('Should check data type convertion', () => {
        const usernameValidation = z.coerce.string().min(3).max(100);
        const isAdminValidation = z.coerce.boolean();
        const priceValidation = z.coerce.number().min(1000).max(1000000);

        const username = usernameValidation.parse(12345)
        console.log(username);
        console.log(typeof username);

        const isAdmin = isAdminValidation.parse("true");
        console.log(isAdmin);
        console.log(typeof isAdmin);

        const price = priceValidation.parse("1000")
        console.log(price);
        console.log(typeof price);
    })
});