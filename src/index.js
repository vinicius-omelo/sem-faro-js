const img = document.getElementById("img");
const btn = document.getElementById("btn");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0);

function changeColor() {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

const stopAutomatic = () => {
  clearInterval(intervalId);
};

const turnOn = {
  red: () => (img.src = "./src/img/vermelho.png"),
  yellow: () => (img.src = "./src/img/amarelo.png"),
  green: () => (img.src = "./src/img/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 1000)),
};

btn.addEventListener("click", trafficLight);
