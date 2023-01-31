let john = {
    name: "John",
    sayHi: function () {
        console.log("Hi buddy!");
    }
};
john.sayHi();

let str = "Hello";
console.log( str.toUpperCase() ); // HELLO

let n = 1.23456;
console.log( n.toFixed(2) ); // 1.23

console.log( typeof 0 ); // "number"
console.log( typeof new Number(0) ); // "object"!
let num = Number("123"); // num = 123;

// console.log(null.test); // error