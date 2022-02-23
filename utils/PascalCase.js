const getPascalCase = (text) =>
    text
        .match(/[a-zA-Z0-9]+/g)
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join("");

const PascalCaseText = getPascalCase("Hey, how are you? I am fine");

console.log(PascalCaseText);
