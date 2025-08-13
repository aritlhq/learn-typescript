describe('Generic Collection', () => {
    it('Should check generic collection', () => {
        // Array
        const array = new Array<string>();
        array.push("John Doe");
        array.push("John");

        console.log(array);
        console.log(array.length)

        // Set
        const set = new Set<string>()
        set.add("John Doe");
        set.add("John");

        console.log(set);
        console.log(set.size);

        // Map
        const map = new Map<string, number>()
        map.set("John", 1);
        map.set("Doe", 2);

        console.log(map);
        console.log(map.size);
    });
});