import type {Category, Product} from "../../src/basic/type-alias";

describe('Alias Data Type', () => {
    it('Should check alias', () => {
        const category: Category = {
            id: 1,
            name: "Category 1",
            description: "Description 1"
        }

        const product: Product = {
            id: 1,
            name: "Product 1",
            price: 100,
            category
        }

        console.log(product);

        expect(category.id).toBe(1);
        expect(product.name).toBe("Product 1");
        expect(product.category.id).toBe(1);
        expect(product.name).toBe("Product 1");
        expect(product.price).toBe(100);
    })
});