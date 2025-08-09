/*
Null Type and Undefined Type
 */

function sayHello(name: string | null) {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log("Hello");
    }
}

sayHello("John Doe");
sayHello(null);

const name: string | undefined = undefined;
console.log(name);