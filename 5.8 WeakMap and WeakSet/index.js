let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference
// john is removed from memory!

/*
weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
*/

let visitsCountMap = new WeakMap();
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let cache = new WeakMap();
// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;
    cache.set(obj, result);
    return result;
  }
  return cache.get(obj);
}

let obj = {/* some object */};
let result1 = process(obj);
let result2 = process(obj);

obj = null;
// cache.size is 0 or soon be 0


let visitedSet = new WeakSet();
john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now
console.log(visitedSet.has(john)); // true

console.log(visitedSet.has(mary)); // false
john = null;
// visitedSet will be cleaned automatically