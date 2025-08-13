import {Entry, Triple} from "../../src/generic/multiple-generic-type";

describe("Multiple Generic Type", () => {
    it("Should check multiple generic type", () => {
        const entry = new Entry<number, string>(1, "Hello John Doe");
        console.log(entry.key);
        console.log(entry.value);

        expect(entry.key).toBe(1);
        expect(entry.value).toBe("Hello John Doe");

        const triple = new Triple<number, string, boolean>(1, "James Bond", true);
        console.log(triple.first);
        console.log(triple.second);
        console.log(triple.third);

        expect(triple.first).toBe(1);
        expect(triple.second).toBe("James Bond");
        expect(triple.third).toBe(true);

        // Optional generic type
        const entrySecond = new Entry(1, "Hello Mikasa")
        console.log(entrySecond.key);
        console.log(entrySecond.value);

        expect(entrySecond.key).toBe(1);
        expect(entrySecond.value).toBe("Hello Mikasa");
    })
})