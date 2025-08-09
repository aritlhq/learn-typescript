/*
Enum Data Type
 */

export enum CustomerType {
    REGULAR,
    GOLD,
    PLATINUM
}

export enum CustomerStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export type Customer = {
    name: string,
    age: number,
    type: CustomerType
    status: CustomerStatus
}