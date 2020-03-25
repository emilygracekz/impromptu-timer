let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const button = document.querySelector(".display button");
const endpoint = "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies";

function timer(seconds) {
    //clear any existing items
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft();

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
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);
    timer(seconds);

    //fetch snnd display quotation
    const response = fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "463d16f422msh6c288922177a171p1532b2jsn9d2aaeca5188",
		"content-type": "application/x-www-form-urlencoded"
	},
    "body": {}

})
.then(response => {
    console.log(response);


})
.catch(err => {
	console.log(err);
});


}

button.addEventListener('click', startTimer);
