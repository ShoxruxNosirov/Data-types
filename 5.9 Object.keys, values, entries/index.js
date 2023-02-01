let user = {
    name: "John",
    age: 30
};
//  Object.keys(user) = ["name", "age"]
//  Object.values(user) = ["John", 30]
//  Object.entries(user) = [ ["name","John"], ["age",30] ]

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);
/*
oublePrices = {
    banana: 2,
    orange: 4,
    meat: 8,
};
*/
console.log(doublePrices.meat); // 8