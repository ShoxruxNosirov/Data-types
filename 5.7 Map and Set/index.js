let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.size); // 3

let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); // 123

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // [cucumber, 500] (and so on)
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
});

let obj = {
    name: "John",
    age: 30
};
map = new Map(Object.entries(obj));
console.log(map.get('name')); // John

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2

let set = new Set();

john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});