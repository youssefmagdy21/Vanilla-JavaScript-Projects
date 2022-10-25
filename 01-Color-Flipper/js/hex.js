// hex page

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomNumber(16).toString(16);
  }
  return hexColor;
}

function generateRandomColor() {
  const randomColor = getRandomHexColor();
  document.getElementById("new-color").innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
}

document
  .getElementById("generate-btn")
  .addEventListener("click", generateRandomColor);
