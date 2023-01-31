let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
console.log(arr[1]); // undefined
// now arr = ["I",  , "home"];
console.log(arr.length);

arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
let removed = arr.splice(0, 3, "Let's", "dance");
console.log(arr) // now ["Let's", "dance", "right", "now"]
console.log(removed); // "I", "study", "JavaScript"

arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5

arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end)

arr = [1, 2];
console.log(arr.concat([3, 4], [5, 6], 7, 8)); // 1,2,3,4,5,6,7,8

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

let fruits = ['Apple', 'Orange', 'Apple']
console.log(fruits.indexOf('Apple')); // 0 (first Apple)
console.log(fruits.lastIndexOf('Apple')); // 2 (last Apple)

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(arr.includes(NaN));// true (correct)

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
let user = users.find(item => item.id == 1);
console.log(user.name);

users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];
// Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0
// Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John'));

users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

arr = [ 1, 2, 15, 6];
arr.sort(function(a, b) { return a - b; });
console.log(arr); // 1, 2, 6, 15

arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log( arr ); // 5,4,3,2,1

arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);  // 15 

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

/*
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
*/