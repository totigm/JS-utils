const filterFromObject = (array, query) =>
    array.filter((element) =>
        Object.entries(query).every(([key, value]) => value === element[key])
    );

const people = [
    { first: "Jane", last: "Doe", age: 21 },
    { first: "Joe", last: "Smith", age: 18 },
    { first: "Matt", last: "Smith", age: 22 },
    { first: "Will", last: "Smith", age: 22 },
];

const query = { last: "Smith", age: 22 };

const found = filterFromObject(people, query);

console.log(found);
