const addTime = (hours, minutes, interval) => {
    if (minutes + interval < 60) minutes += interval;
    else {
        hours++;
        minutes -= 60;
        const time = addTime(hours, minutes, interval);
        hours = time.hours;
        minutes = time.minutes;
    }
    return { hours, minutes };
};

const getTwoDigits = (num) => (num < 10 ? "0" + num : num);

const getTimeOptions = (interval) => {
    const timeOptions = [];

    const intervalsAmount = (60 * 24) / interval;
    let hours = 0;
    let minutes = 0;
    for (let i = 0; i < intervalsAmount; i++) {
        timeOptions.push(getTwoDigits(hours) + ":" + getTwoDigits(minutes));
        const time = addTime(hours, minutes, interval);
        hours = time.hours;
        minutes = time.minutes;
    }

    return timeOptions;
};

const timeOptions = getTimeOptions(45);

console.log(timeOptions);
