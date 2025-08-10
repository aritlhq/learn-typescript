import type {Category, Product} from "../src/optional-properties";

describe('Optional Properties', () => {
    it("Should check optional properties", () => {
        const category: Category = {
            id: 1,
            name: "Category 1",
        }

        const product: Product = {
            id: 1,
            name: "Product 1",
            price: 100,
            category
        }

        console.log(product);
        console.log(product.category);

        expect(product.name).toBe("Product 1");
        expect(product.category.id).toBe(1);
        expect(product.name).toBe("Product 1");
        expect(product.price).toBe(100);
    })
});