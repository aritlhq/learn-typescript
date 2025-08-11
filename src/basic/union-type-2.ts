/*
Union Types
 */

export type ID = string | number;

export type Category = {
    id: ID,
    name: string
    description: string
}

export type Product = {
    id: number,
    name: string,
    price: number,
    category: Category
}