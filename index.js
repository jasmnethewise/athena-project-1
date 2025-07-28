const catImg = document.getElementById('lolow');
const meowSound = document.getElementById('meow-sound');

catImg.addEventListener('click', () => {
    meowSound.currentTime = 0; 
    meowSound.play();
});