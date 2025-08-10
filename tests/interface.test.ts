import type {Category} from "../src/interface";

describe('Interface', () => {
    it("Should check interface", () => {
        const category: Category = {
            id: 1,
            description: "Description 1"
        }

        console.log(category);

        expect(category.id).toBe(1);
        expect(category.description).toBe("Description 1");
    })

});