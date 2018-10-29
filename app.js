

// DOM variables
let secondHand = document.querySelector('.second-hand'),
    minuteHand = document.querySelector('.min-hand'),
    hourHand = document.querySelector('.hour-hand'),
    date = new Date();


// Function to move second hand according to actual time
function moveSeconds() {
    let date = new Date(),
        seconds = date.getSeconds(),
        secondsDegrees = (seconds / 60) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    if(seconds === 0) {
        secondHand.style.transition = 'none';
    } 
}

// Function to move minute hand according to actual time
function moveMinutes() {
    let date = new Date(),
        minutes = date.getMinutes()
        minutesDegrees = (minutes / 60) * 360 + 90;

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    if(minutes === 0) {
        minuteHand.style.transition = 'none';
    } 
}

// Function to move hour hand according to actual time
function moveHours() {
    let date = new Date(),
        hour = date.getHours(),
        hourDegrees = (hour / 12) * 360 + 90;

        hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if(hour === 0) {
        hourHand.style.transition = 'none';
    } 
}


setInterval(moveSeconds, 500);
setInterval(moveMinutes, 1000);
setInterval(moveHours, 1000);
