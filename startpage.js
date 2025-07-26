const startStopButton = document.getElementById('start-stop');
const pauseButton = document.getElementById('pause');
const timerDisplay = document.getElementById('timer');

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.innerHTML = ` ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const startTimer = () => {
    interval = setInterval( () => {
        timeLeft--;
        updateTimer();

        
    }, 1000);

}