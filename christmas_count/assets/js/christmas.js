let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

const initEnd = () => {
    let end = new Date();
    end.setFullYear(2024);
    end.setMonth(11);
    end.setDate(25);
    end.setHours(0);
    end.setMinutes(0);
    end.setSeconds(0);
    return end;
};

const updateHtml = (days, hours, mins, seconds) => {
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = mins;
    second.innerHTML = seconds;
};

const calcTime = (end) => {
    let current = new Date().getTime();
    let diff = (end - current) / 1000;
    let unit = {
        days: 60 * 60 * 24,
        hours: 60 * 60,
        mins: 60,
    };

    let days = Math.floor(diff / unit.days);

    diff = diff % unit.days;
    let hours = Math.floor(diff / unit.hours);

    diff = diff % unit.hours;
    let mins = Math.floor(diff / unit.mins);

    let seconds = Math.floor(diff % unit.mins);

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (mins < 10) {
        mins = `0${mins}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    updateHtml(days, hours, mins, seconds);
};

let end = initEnd();

setInterval(() => {
    calcTime(end);
}, 1000);

calcTime(end);
