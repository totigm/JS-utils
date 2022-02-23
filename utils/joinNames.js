const joinNames = (names) => {
    const { length } = names;
    return length > 1
        ? `${names.slice(0, length - 1).join(", ")} and ${names[length - 1]}`
        : names.join("");
};

const names = ["Jane", "Joe", "Mat", "Will"];

const joinedNames = joinNames(names);

console.log("Joined names", joinedNames);
