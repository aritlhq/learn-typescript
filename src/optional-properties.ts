/*
Optional Properties
 */

type Category = {
    id: number | string,
    name: string,
    description?: string
}

type Product = {
    id: number,
    name: string,
    price: number,
    category?: Category
}

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

console.log(product.category);