/*
Generic Constraint
 */

export interface Employee {
    id: string;
    name: string;
}

export interface Manager extends Employee {
    totalEmployees: number;
}

export interface VicePresident extends Manager {
    totalManagers: number;
}