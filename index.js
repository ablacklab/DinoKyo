let affection = getRandomStat();
let food = getRandomStat();
let affectiondan = getRandomStat();
let fooddan = getRandomStat();

const affectionbar = document.querySelector("#affection-bar");
const foodbar = document.querySelector("#food-bar");
const affectionbardan = document.querySelector("#affection-bar-dan");
const foodbardan = document.querySelector("#food-bar-dan");

const petElement = document.querySelector('.petimg');
const petElementDan = document.querySelector('.petimgdan')
let currentImage = 1;

function getRandomStat() {
  return Math.floor(Math.random() * (7 - 3) + 3); 
}

function updateStats() {
    affectionbar.innerHTML = " ";
    foodbar.innerHTML = " ";
    affectionbardan.innerHTML = " ";
    foodbardan.innerHTML = " ";

    if (affection > 10){
      affection = 10;
    }
    if (food > 10){
      food = 10
    }
    if (affectiondan > 10){
      affectiondan = 10;
    }
    if (fooddan > 10){
      fooddan = 10
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
    for (let i = 0; i < affectiondan; i++) {
      const chicken = document.createElement("img");
      chicken.setAttribute("src", "https://media.forgecdn.net/avatars/51/618/636105769357948349.png");
      affectionbardan.appendChild(chicken);
  }
  for (let i = 0; i < fooddan; i++) {
    const chicken = document.createElement("img");
    chicken.setAttribute("src", "https://minecraft2261.weebly.com/uploads/1/2/3/7/12375097/503644917.png?188");
    foodbardan.appendChild(chicken);
}
    
}

function updatePetImage() {
  currentImage = 3 - currentImage;
  petElement.setAttribute("src", `https://raw.githubusercontent.com/ablacklab/DinoKyo/main/Images/dino${currentImage}.png`);
  petElementDan.setAttribute("src", `https://raw.githubusercontent.com/ablacklab/DinoKyo/main/Images/din${currentImage}.png`)
}

function pet() {
  affection += 1;
  updateStats();
}

function feed() {
  food += 1;
  updateStats();
}

function petdan() {
  affectiondan += 1;
  updateStats();
}

function feeddan() {
  fooddan += 1;
  updateStats();
}


function decreaseHearts() {
    affection -= 1;
    affectiondan -= 1;
    updateStats();
}
function decreaseFood() {
    food -= 1;
    fooddan -= 1;
    updateStats();
}


setInterval(decreaseHearts, 3000);
setInterval(decreaseFood, 5000);

setInterval(updatePetImage, 1000);

updateStats();