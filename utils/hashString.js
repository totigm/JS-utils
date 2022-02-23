const { createHash } = require("crypto");

const hashString = (str, algorithm = "sha512") =>
  createHash(algorithm).update(str).digest("hex");

const pass = hashString("123456");

const rightPass = hashString("123456");
const wrongPass = hashString("654321");

console.log("Hashed password =>", pass);
console.log("Right password equals stored pass =>", pass === rightPass);
console.log("Wrong password equals stored pass =>", pass === wrongPass);
