const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const count = document.querySelector(".count");
let counter = 0;

decrease.addEventListener("click", () => {
  counter -= 1;
  count.innerHTML = counter;
  checkCounter();
});
reset.addEventListener("click", () => {
  counter = 0;
  count.innerHTML = counter;
  checkCounter();
});
increase.addEventListener("click", () => {
  counter += 1;
  count.innerHTML = counter;
  checkCounter();
});

function checkCounter() {
  if (counter < 0) {
    count.style.color = "#D2042D";
  }
  if (counter > 0) {
    count.style.color = "#097969";
  }
  if (counter === 0) {
    count.style.color = "#0d1321";
  }
}
