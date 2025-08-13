import {z} from "zod";

describe('Date Validation', () => {
    it('Should check date validation', () => {
        const birthDateValidation = z.coerce.date().min(new Date(1980, 0, 1)).max(new Date(2045, 0, 1));
        const birthDate = birthDateValidation.parse("2000-01-01");
        console.log(birthDate);

        const birthDateTwo = birthDateValidation.parse(new Date(1999, 0, 1));
        console.log(birthDateTwo);
    });
});