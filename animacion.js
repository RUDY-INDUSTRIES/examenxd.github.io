const playButton = document.getElementById('playButton');
const myListButton = document.getElementById('myListButton');

playButton.addEventListener('click', () => {
  playButton.classList.add('highlight');
});

myListButton.addEventListener('click', () => {
  myListButton.classList.add('highlight');
});
