const getKebabCase = (text) =>
    text
        .match(/[a-zA-Z0-9]+/g)
        ?.join("-")
        .toLowerCase();

const kebabCaseText = getKebabCase("Hey, how are you? I am fine");

console.log(kebabCaseText);
