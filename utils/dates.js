const addZero = (number) => (number < 10 ? `0${number}` : String(number));

const getTime = (date) => {
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());

  return `${hours}:${minutes}`;
};

const getDiffBetweenDates = (first, second = new Date()) => {
  const msInADay = 1000 * 60 * 60 * 24; // Milliseconds * seconds * minutes * hours

  const diffTime = second.getTime() - first.getTime();
  return Math.ceil(diffTime / msInADay);
};

const getDate = (first) => {
  const today = new Date();
  if (
    first.getFullYear() === today.getFullYear() &&
    first.getMonth() === today.getMonth() &&
    first.getDate() === today.getDate()
  )
    return "Today";
  else {
    today.setHours(0, 0, 0, 0, 0);
    if (getDiffBetweenDates(first, today) === 1) return "Yesterday";
  }

  const year = first.getFullYear();
  const month = addZero(first.getMonth() + 1);
  const day = addZero(first.getDate());

  return `${day}/${month}/${year}`;
};

const getDateAndTime = (first) => {
  const date = getDate(first);
  const time = getTime(first);

  return `${date} at ${time}`;
};

const randomDateAndTime = getDateAndTime(new Date("2022-06-06T21:30"));
const currentDateAndTime = getDateAndTime(new Date());

console.log({ randomDateAndTime, currentDateAndTime });
