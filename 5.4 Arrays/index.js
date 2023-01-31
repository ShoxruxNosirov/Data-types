let arr = new Array();
    arr = [];
    fruits = ["Apple", "Orange", "Plum"];

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
fruits = ["Apple", "Orange", "Plum"];

console.log( fruits.length ); // 3

arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
console.log( arr[1].name ); // John
// get the function at index 3 and run it
arr[3]();

fruits = [
    "Apple",
    "Orange",
    "Plum",
];
console.log( fruits[fruits.length-1] );   // Plum
console.log( fruits.at(-1) );             // Plum

console.log( fruits.pop() ); // remove "Pear" and console.log it
console.log( fruits ); // Apple, Orange
fruits.push("Pear");
console.log( fruits );        // Apple, Orange, Pear

console.log( fruits.shift() ); // remove Apple and console.log it
console.log( fruits ); // Orange, Pear
fruits.unshift('Apple');
console.log( fruits ); // Apple, Orange, Pear

fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );

fruits = [];
fruits[123] = "Apple";
console.log( fruits.length );

arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr = new Array("Apple", "Pear", "etc");

let arr = new Array(2); // will it create an array of [2] ?
console.log( arr[0] ); // undefined! no elements.
console.log( arr.length ); // 2