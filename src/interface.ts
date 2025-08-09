interface Category {
    id: number
    name?: string
    readonly description: string
}


const category: Category = {
    id: 1,
    description: "Description 1"
}

console.log(category)