/*
Indexable Interface
 */

export interface Product {
    [index: number]: string
}

export interface Category {
    [index: string]: string
}