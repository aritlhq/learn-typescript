/*
Intersection Type
 */

export interface HasName {
    name: string;
}

export interface HasAge {
    age: number;
}

export type Person = HasName & HasAge;