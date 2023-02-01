let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);
console.log(typeof json); // we've got a string!
console.log(json);
/* JSON-encoded object:
{
"name": "John",
"age": 30,
"isAdmin": false,
"courses": ["html", "css", "js"],
"spouse": null
}
*/

console.log(JSON.stringify(1)) // 1
console.log(JSON.stringify('test')) // "test"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

let user = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
console.log(JSON.stringify(user)); // {} (empty object)

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
console.log(JSON.stringify(meetup));
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

let room = {
    number: 23
};
meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};
room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup, ['title', 'participants']));
// {"title":"Conference","participants":[{},{}]}

room = {
    number: 23
};

meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
/*
{
"title":"Conference",
"participants":[{"name":"John"},{"name":"Alice"}],
"place":{"number":23}
}
*/

room = {
    number: 23
};
meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};
room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
meetup = {
    title: "Conference",
    room
};
console.log(JSON.stringify(room)); // 23
console.log(JSON.stringify(meetup));
/*
{
  "title":"Conference",
  "room": 23
}
*/

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

meetup = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

console.log(meetup.date.getDate());