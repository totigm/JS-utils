# JS utils

This is a collection of JavaScript snippets

## [camelCase](camelCase.js)

This snippet converts a string to its camelCase notation.\
For example, `This is not camel case, but it will` will return `thisIsNotCamelCaseButItWill`

## [PascalCase](PascalCase.js)

This snippet converts a string to its PascalCase notation.\
For example, `This is not pascal case, but it will` will return `ThisIsNotPascalCaseButItWill`

## [Capitalize](capitalize.js)

This snippet capitalizes a string.\
For example, `toti muñoz` will return `Toti Muñoz`

## [Create fake email](createFakeEmail.js)

This snippet uses puppeteer to create fake emails. You don't have to provide any parameter.

## [Filter from object](filterFromObject.js)

This snippet filters objects of an array that matches every field of a given query object.\
For example, if you want to look for people whose last name is Smith and also are 22 years old, you could use
`filterFromObject(peopleArray, { last: "Smith", age: 22 })` and get an array of them.

## [Format nested object](formatNestedObject.js)

This snippet executes a given callback for every element of an object, no matter how nested it is.
For example, let's say that you have an object full of numbers (some of them are deeply nested) and you want to fix them all to two decimals, running `formatNestedObject(object, (number) => number.toFixed(2))` will do it for you.

## [Get unique values](getUniqueValues.js)

This snippet will return an array without repeating its values.\
For example, `[1, 2, 2, 1, 3] will return [1, 2, 3]`

## [Join names](joinNames.js)

This snippet joins names' array based on its length.\
E.g.

-   `["Toti"]` will return `Toti`
-   `["Toti", "John"]` will return `Toti and John`
-   `["Toti", "John", "Mike"]` will return `Toti, John and Mike`
