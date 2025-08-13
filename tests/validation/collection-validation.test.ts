import {z} from "zod";

describe('Collection Validation', () => {
    it('Should check collection validation', () => {
        // Array
        const arraySchemaValidation = z.array(z.string()).min(1).max(10);
        const arrayRequest: Array<string> = ["John Doe", "Jane Doe"];
        const arrayResult: Array<string> = arraySchemaValidation.parse(arrayRequest)

        console.log(arrayResult);

        // Sets
        const setsSchemaValidation = z.set(z.string()).min(1).max(10);
        const setsRequest: Set<string> = new Set(["John Doe", "Jane Doe", "John Wick"]);
        const setsResult: Set<string> = setsSchemaValidation.parse(setsRequest)

        console.log(setsResult);

        // Maps
        const mapsSchemaValidation = z.map(z.string(), z.string())
        const mapsRequest: Map<string, string> = new Map([["John", "Doe"], ["Jane", "Doe"], ["John", "Wick"]]);
        const mapsResult: Map<string, string> = mapsSchemaValidation.parse(mapsRequest);

        console.log(mapsResult);
    })
});