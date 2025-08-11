import {sayHello} from "../../src/basic/say-hello";

describe('"Say Helo', () => {
    it("Should say hello", () => {
        expect(sayHello("World")).toBe("Hello World");
    })
});