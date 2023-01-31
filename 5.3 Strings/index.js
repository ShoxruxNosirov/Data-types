let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;
let guestList2 = "Guests:\n * John\n * Pete\n * Mary\n";
console.log(guestList1 === guestList2); // true

console.log( 'I\'m the Walrus!' ); // I'm the Walrus!
console.log( "I'm the Walrus!" ); // I'm the Walrus!

console.log( `My\n`.length ); // 3

let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H
// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );

str = 'Hi';
str = 'h' + str[1]; // replace the string
console.log( str ); // hi

console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface

str = 'Widget with id';
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found,

str = 'Widget with id';
console.log( str.indexOf('id', 2) ) // 12

console.log( "Widget with id".includes("Widget") ); // true
console.log( "Hello".includes("Bye") ); // false
console.log( "Widget".includes("id") ); // true
console.log( "Widget".includes("id", 3) ); // false,

console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

str = "stringify";
console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str.slice(0, 1) ); // 's',
console.log( str.slice(2) );    // 'ringify'
console.log( str.slice(-4, -1) ); // 'gif'

console.log( 'a' > 'Z' ); // true
console.log( 'Österreich' > 'Zealand' ); // true
console.log( 'Österreich'.localeCompare('Zealand') ); // -1

console.log( "Z".codePointAt(0) ); // 90
console.log( "z".codePointAt(0) ); // 122
console.log( "z".codePointAt(0).toString(16) ); // 7a

console.log( String.fromCodePoint(90) ); // Z
console.log( String.fromCodePoint(0x5a) ); // Z
