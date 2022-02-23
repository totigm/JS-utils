# JS utils

This is a collection of JavaScript snippets

## [camelCase](./utils/camelCase.js)

This snippet converts a string to its camelCase notation.\
For example, `This is not camel case, but it will` will return `thisIsNotCamelCaseButItWill`

## [PascalCase](./utils/PascalCase.js)

This snippet converts a string to its PascalCase notation.\
For example, `This is not pascal case, but it will` will return `ThisIsNotPascalCaseButItWill`

## [kebab-case](./utils/kebab-case.js)

This snippet converts a string to its kebab-case notation.\
For example, `This is not kebab case, but it will` will return `this-is-not-kebab-case-but-it-will`

## [Capitalize](./utils/capitalize.js)

This snippet capitalizes a string.\
For example, `toti muñoz` will return `Toti Muñoz`

## [Create fake email](./utils/createFakeEmail.js)

This snippet uses puppeteer to create fake emails. You don't have to provide any parameter.

## [Filter from object](./utils/filterFromObject.js)

This snippet filters objects of an array that matches every field of a given query object.\
For example, if you want to look for people whose last name is Smith and also are 22 years old, you could use
`filterFromObject(peopleArray, { last: "Smith", age: 22 })` and get an array of them.

## [Format nested object](./utils/formatNestedObject.js)

This snippet executes a given callback for every element of an object, no matter how nested it is.
For example, let's say that you have an object full of numbers (some of them are deeply nested) and you want to fix them all to two decimals, running `formatNestedObject(object, (number) => number.toFixed(2))` will do it for you.

## [Join names](./utils/joinNames.js)

This snippet joins names' array based on its length.\
For example,

-   `["Toti"]` will return `Toti`
-   `["Toti", "John"]` will return `Toti and John`
-   `["Toti", "John", "Mike"]` will return `Toti, John and Mike`

## [Time options](./utils/timeOptions.js)

This snippet will return an array with every time option for a given interval in minutes. This can be useful for dropdowns options.\
For example, `getTimeOptions(45)` will return `['00:00', '00:45', '01:30', '02:15', '03:00', '03:45', '04:30', '05:15','06:00', '06:45', '07:30', '08:15', '09:00', '09:45', '10:30', '11:15', '12:00', '12:45', '13:30', '14:15', '15:00', '15:45', '16:30', '17:15', '18:00', '18:45', '19:30', '20:15', '21:00', '21:45', '22:30', '23:15']`

## [Unique values](./utils/uniqueValues.js)

This snippet will return an array without repeating its values.\
For example, `[1, 2, 2, 1, 3]` will return `[1, 2, 3]`

## [Hide email](./utils/hideEmail.js)

This snippet will hide the half of the email.\
For example, `testemail@gmail.com` will return `test*****@gmail.com`

## [Hash string](./utils/hashString.js)

This snippet will hash a string using a given hashing algorithm (`sha512` by default). This is useful for storing sensitive data securely.
For example, `123456` will return `ba3253876aed6bc22d4a6ff...`
