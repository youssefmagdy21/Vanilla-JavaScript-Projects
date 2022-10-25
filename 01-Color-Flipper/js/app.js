// simple page

const colorSample = ["green", "red", "rgb(133,122,200)", "#f15025"];

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor() {
  const sampleMaxIdx = colorSample.length;
  const randomColorIdx = getRandomNumber(sampleMaxIdx);
  const randomColor = colorSample[randomColorIdx];
  document.getElementById("new-color").innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
}

document
  .getElementById("generate-btn")
  .addEventListener("click", generateRandomColor);
