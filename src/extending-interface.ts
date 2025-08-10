/*
Extending Interface
 */

export interface Employee {
    name: string;
    age: number;
}

export interface Manager extends Employee {
    department: string;
    title: string;
    employees: Employee[];
}