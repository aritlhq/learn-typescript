/*
Optional Properties
 */

export type Category = {
    id: number | string,
    name: string,
    description?: string
}

export type Product = {
    id: number,
    name: string,
    price: number,
    category?: Category
}
