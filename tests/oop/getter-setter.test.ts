describe("Getter Setter", () => {
    it("Should check getter setter", () => {
        class Category {
            _name?: string

            get name(): string {
                if (this._name) {
                    return this._name;
                } else {
                    return "No name";
                }
            }

            set name(value: string) {
                if (value !== "") {
                    this._name = value
                }
            }
        }

        const category: Category = new Category();
        console.log(category.name);

        category.name = "Test";
        console.log(category.name);

        category.name = "";
        console.log(category.name);
    })
})