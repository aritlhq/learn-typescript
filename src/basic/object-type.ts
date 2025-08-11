/*
Object Data Type
 */

const category: { id: number, name: string, description: string } = {
    id: 1,
    name: "Category 1",
    description: "Description 1"
}

const product: { id: number, name: string, price: number, category: { id: number, name: string, description: string } } = {
    id: 1,
    name: "Product 1",
    price: 100,
    category
}

console.log(product.category);
console.log(product);