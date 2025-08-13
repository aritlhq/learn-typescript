import {Data} from "../../src/generic/generic-class";

describe("Generic Class", () => {
    it('Should check generic', () => {
        // Create object
        const data: Data<any> = new Data<number>(1234);

        data.value = "Jane Doe";
        data.value = true;

        console.log(data);

        // Using data in generic
        const dataString: Data<any> = new Data<string>("Jane Doe 2");
        const firstName = dataString.value.substring(0, 3);

        console.log(firstName);
    });
})