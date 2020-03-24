let countdown;
const timerDisplay = document.querySelector(".display__time-left");
// const endTime = document.querySelector(".display__end-time");
const start = document.getElementById("#button");
const endpoint = "150000-quotes.p.rapidapi.com";

function timer() {
  const now = Date.now();
  const then = now + 420 * 1000;
  displayTimeLeft(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if timer at 0
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    //display
    displayTimeLeft(secondsLeft);
    // console.log(secondsLeft);
  }, 1000);
}

function displayTimeLeft() {
  const minutes = Math.floor(420 / 60);
  const remainderSeconds = 420 % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

// function displayEndTime(timesetamp) {
//     const end = new Date(timestamp);
//     const hour = end.getHours();
//     const minutes = end.getMinutes();
//     endTime.text
// }
// function getQuote() {
fetch("endpoint", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "150000-quotes.p.rapidapi.com",
    "x-rapidapi-key": "463d16f422msh6c288922177a171p1532b2jsn9d2aaeca5188"
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
// }

function sayHi() {
  console.log("hi");
}
timer();
start.addEventListener("click", sayHi);
