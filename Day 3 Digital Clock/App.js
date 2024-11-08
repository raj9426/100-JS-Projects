const h = document.querySelector(".h");
const m = document.querySelector(".m");
const day = document.querySelector(".span_day");
const time1 = document.querySelector(".time");
const date = new Date();

let day1;
h.innerText = date.getHours().toString().padStart(2, '0');
m.innerText = date.getMinutes().toString().padStart(2, '0');

if(date.getHours() < 12){
    time1.style.setProperty('--after-content', "'AM'");
}
else{
    time1.style.setProperty('--after-content', "'PM'");
}

switch (date.getDay()) {
    case 0:
        day1 = "Sunday";
        break;
    case 1:
        day1 = "Monday";
        break;
    case 2:
        day1 = "Tuesday";
        break;
    case 3:
        day1 = "Wednesday";
        break;
    case 4:
        day1 = "Thursday";
        break;
    case 5:
        day1 = "Friday";
        break;
    case 6:
        day1 = "Saturday";
}

day.innerText = `${date.getMonth()}, ${day1} ${date.getDate()}`




console.log(date.getDate());