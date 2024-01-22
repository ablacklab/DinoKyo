let affection = getRandomStat();
let food = getRandomStat();
let cleanliness = getRandomStat();



const petElement = document.querySelector('.petimg');
let currentImage = 1;

petElement.setAttribute("src", "https://i.pinimg.com/564x/f1/bb/28/f1bb28e0d43d89421163468dc4f539c0.jpg")

function getRandomStat() {
  return Math.floor(Math.random() * (71 - 30) + 30); 
}

function playButtonClickSound() {
  const sound = document.getElementById('buttonClickSound');
  sound.currentTime = 0;
  sound.play();
}

function updateStats() {
  document.getElementById('affection-bar').style.width = affection + '%';
  document.getElementById('food-bar').style.width = food + '%';
  document.getElementById('cleanliness-bar').style.width = cleanliness + '%';
}

function updatePetImage() {
  currentImage = 3 - currentImage;
  petElement.style.backgroundImage = `url('pet${currentImage}.png')`;
}

function pet() {
  //playButtonClickSound();
  affection += 10;
  updateStats();
}

function feed() {
  //playButtonClickSound();
  food += 10;
  updateStats();
}

function bathe() {
  //playButtonClickSound();
  cleanliness += 10;
  updateStats();
}

function decreaseStats() {
  // Ajusta las tasas de disminución según tus preferencias
  affection -= 2;
  food -= 3;
  cleanliness -= 1;
  updateStats();

  // Verifica si los stats han llegado a 0 y realiza acciones adicionales si es necesario
  if (affection <= 0 || food <= 0 || cleanliness <= 0) {
    // Puedes agregar lógica aquí para manejar el estado cuando los stats llegan a 0
  }
}

// Actualiza las barras cada 1000 milisegundos (1 segundo)
setInterval(decreaseStats, 1000);

// Configura la animación de cambio de imagen cada 500 milisegundos (medio segundo)
//setInterval(updatePetImage, 500);
