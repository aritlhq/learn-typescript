import type {Product, Category} from "../../src/basic/indexable-interface";

describe('Indexable Interface', () => {
    it("Should check indexable interface", () => {
        const product: Product = ["Product 1", "Product 2", "Product 3"];
        console.log(product[2]);

        const category: Category = {
            "1": "Category 1",
            "2": "Category 2",
            "3": "Category 3",
        }
        console.log(category["2"]);

        expect(product[2]).toBe("Product 3");
        expect(category["2"]).toBe("Category 2");
    })

});