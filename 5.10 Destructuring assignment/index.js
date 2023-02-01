let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// firstName = "Julius"     title = "Consul"

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');
/* 
user = {
    name: John,
    surname: Smith
}
*/

user = {
    name: "John",
    age: 30
};
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

user = new Map();
user.set("name", "John");
user.set("age", "30");
for (let [key, value] of user) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];

console.log(`guest = ${guest}  admin = ${admin}`); // goust = Pete  admin = Jane

let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]

let [name = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(name);    // Julius (from array)
console.log(surname); // Anonymous (default used)

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title1, width, height } = options;
console.log(title1);  // Menu
console.log(width);  // 100
console.log(height); // 200

options = {
    title2: "Menu",
    width: 100,
    height: 200
};
let { width: w, height: h, title2 } = options;
// width -> w
// height -> h
// title -> title
console.log(title2);  // Menu
console.log(w);      // 100
console.log(h);      // 200

options = {
    title3: "Menu",
    height: 200,
    width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title3, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100

options = {
    size: {
        widthh: 100,
        heightt: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
    size: { // put size here
        widthh,
        heightt
    },
    items: [item1, item2], // assign items here
    title4 = "Menu" // not present in the object (default value is used)
} = options;

console.log(title4);  // Menu
console.log(widthh);  // 100
console.log(heightt); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {
    console.log(`${title} ${w} ${h}`); // My Menu 100 200
    console.log(item1); // Item1
    console.log(item2); // Item2
}

showMenu(options);

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    console.log(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200