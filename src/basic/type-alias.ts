/*
Type Aliases
 */

export type Category = {
    id: number,
    name: string
    description: string
}

export type Product = {
    id: number,
    name: string,
    price: number,
    category: Category
}