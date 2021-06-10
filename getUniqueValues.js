const myArray = [1, 2, 3, 2, 10, 4, 10];

// Get values that aren't repeated
let getUniqueValues = (array) => [...new Set(array)];

const uniqueValues = getUniqueValues(myArray);

console.log(uniqueValues);
