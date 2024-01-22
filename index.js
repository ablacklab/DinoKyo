let affection = getRandomStat();
let food = getRandomStat();

const affectionbar = document.querySelector("#affection-bar");
const foodbar = document.querySelector("#food-bar");


const petElement = document.querySelector('.petimg');
let currentImage = 1;

function getRandomStat() {
  return Math.floor(Math.random() * (7 - 3) + 3); 
}

function updateStats() {
    affectionbar.innerHTML = " ";
    foodbar.innerHTML = " ";

    if (affection > 10){
      affection = 10;
    }
    if (food > 10){
      food = 10
    }

    for (let i = 0; i < affection; i++) {
        const heart = document.createElement("img");
        heart.setAttribute("src", "https://media.forgecdn.net/avatars/51/618/636105769357948349.png");
        affectionbar.appendChild(heart);
    }
    for (let i = 0; i < food; i++) {
        const chicken = document.createElement("img");
        chicken.setAttribute("src", "https://minecraft-max.net/upload/iblock/646/6467aaa4f76c69d8a7734b08d9752cbe.png");
        foodbar.appendChild(chicken);
    }
    
}

function updatePetImage() {
  currentImage = 3 - currentImage;
  petElement.setAttribute("src", `https://raw.githubusercontent.com/ablacklab/DinoKyo/main/Images/dino${currentImage}.png`)
}

function pet() {
  affection += 1;
  updateStats();
}

function feed() {
  food += 1;
  updateStats();
}


function decreaseHearts() {
    affection -= 1;
    updateStats();
}
function decreaseFood() {
    food -= 1;
    updateStats();
}


setInterval(decreaseHearts, 3000);
setInterval(decreaseFood, 5000);

setInterval(updatePetImage, 1000);

updateStats();