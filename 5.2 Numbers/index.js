let billion = 1000000000;
    billion = 1_000_000_000;
    billion = 1e9;

let mсs = 0.000001;
    mcs = 1e-6;

console.log( 0xff ); // 255
console.log( 0xFF ); // 255 

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
console.log( a == b ); // true

let num = 255;
console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111
console.log( 123456..toString(36) ); // 2n9c

//          Math.floor	Math.ceil	Math.round	Math.trunc
//  3.1        	3	        4	        3	        3
//  3.6	        3	        4	        4	        3
//  -1.1	    -2	        -1	        -1	        -1
//  -1.6	    -2	        -1	        -2	        -1

console.log( 1e500 ); // Infinity

console.log( 0.1 + 0.2 == 0.3 ); // false
console.log( 0.1 + 0.2 ); // 0.30000000000000004
console.log( 0.1.toFixed(20) ); // 0.10000000000000000555

console.log( 9999999999999999 ); // shows 10000000000000000

console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
console.log( NaN === NaN ); // false
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false
console.log( isFinite(Infinity) ); // false

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12
console.log( parseFloat('12.3.4') ); // 12.3

console.log( parseInt('a123') ); // NaN

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255

console.log( parseInt('2n9c', 36) ); // 123456

console.log( Math.random() ); // 0.1234567894322
console.log( Math.random() ); // 0.5435252343232
console.log( Math.random() ); // ... (any random numbers)

console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1