const getCamelCase = (text) =>
    text
        .match(/[a-zA-Z]+/g)
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join("");

const camelCaseText = getCamelCase("Hey, how are you? I am fine");

console.log(camelCaseText);
