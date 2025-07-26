let timerIntreval;
let timeInseconds = 1500;
let timerDisplay = document.querySelector('.timer-display');
let timerPicker = document.querySelector('.timer-picker-hidden');
let hourSelect = document.getElementById('hour-select');
let minuteSelector = document.getElementById('minute-selector');
timerDisplay.addEventListener('click', () => {
    timerPicker.style.display = 'block';
});