const visibleEmail = "testemail@gmail.com";

const hideEmail = (email) => {
  const [username, domain] = email.split("@");

  const halfLength = username.length / 2;

  const shown = username.substr(0, Math.floor(halfLength));
  const hidden = "*".repeat(Math.ceil(halfLength));

  return `${shown}${hidden}@${domain}`;
};

const hiddenEmail = hideEmail(visibleEmail);

console.log(hiddenEmail);
