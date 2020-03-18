let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if timer at 0
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        //display
        displayTimeLeft(secondsLeft);
        console.log(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    console.log(seconds);
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}
function displayEndTime(timesetamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.text
}
timer(420);