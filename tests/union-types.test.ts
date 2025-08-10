import type {Category, Product} from "../src/union-type-2";

describe('Alias Type for Union Type', () => {
    it("Should check Alias and Union", () => {
        const category: Category = {
            id: "1",
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

        expect(category.id).toBe("1");
        expect(category.name).toBe("Category 1");
        expect(category.description).toBe("Description 1");

        expect(product.id).toBe(1);
        expect(product.name).toBe("Product 1");
        expect(product.price).toBe(100);
    })

});