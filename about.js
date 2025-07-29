const disk = document.getElementById('disk');
const music = document.getElementById('music');

let isPlaying = false;

disk.addEventListener('click', () => {
  if (isPlaying) {
    music.pause(); 
    isPlaying = false;
  } else {
    music.play();    
    isPlaying = true;
  }
});