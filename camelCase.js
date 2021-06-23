const getCamelCase = (text) =>
    text
        .match(/[a-zA-Z0-9]+/g)
        .map(
            (word, i) =>
                (i === 0 ? word[0].toLowerCase() : word[0].toUpperCase()) +
                word.substr(1).toLowerCase()
        )
        .join("");

const camelCaseText = getCamelCase("Hey, how are you? I am fine");

console.log(camelCaseText);
