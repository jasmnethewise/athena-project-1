const startStopButton = document.getElementById('start-stop');
const pauseButton = document.getElementById('pause');
const timerInput = document.getElementById('timer');
const resetButton = document.getElementById('reset');

let timeLeft = 1500;
let interval;

function praseTimerInput() {
    const [mins, secs] = timerInput.value.split(':').map(Number);
    return (mins * 60) + (isNaN(secs) ? 0 : secs);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerInput.value = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    timeLeft = praseTimerInput();
    clearInterval(interval);
    interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById('message').textContent = "Time's up!";
            document.getElementById('message').style.display = 'block';

            const audio = document.getElementById('audio');
            audio.play();
            return;
        }
        timeLeft--;
        updateTimerDisplay();
    }, 1000);
}
function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 0;
    updateTimerDisplay();
}

startStopButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
timerInput.addEventListener('keydown', function (e) {
    
    const cursorPos = timerInput.selectionStart;

    
    if ((e.key === 'Backspace' && cursorPos === 3) || 
        (e.key === 'Delete' && cursorPos === 2)) {
        e.preventDefault();
    }

    
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
    if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
});