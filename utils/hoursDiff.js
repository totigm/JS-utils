const getHoursDiff = (date1, date2) => Math.abs(date1 - date2) / 36e5;

const randomDate = new Date("2022-03-27T08:00");
const anotherDate = new Date("2022-03-30T08:00");

const hoursDiff = getHoursDiff(randomDate, anotherDate);

console.log(hoursDiff);
