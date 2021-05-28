const sentence = "hey soul sister";

const capitalize = (value) =>
    value
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

const capitalized = capitalize(sentence);

console.log(capitalized);
