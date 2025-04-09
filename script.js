const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const resetButton = document.getElementById("resetButton");
const getLinkButton = document.getElementById("getLinkButton");

let count1 = 0;
let count2 = 0;
let count3 = 0;

box1.addEventListener("click", () => {
  count1 = (count1 + 1) % 2; // Toggle between 0 and 1
  box1.textContent = count1;
  checkPassword();
});

box2.addEventListener("click", () => {
  count2 = (count2 + 1) % 10; // Cycle through 0-9
  box2.textContent = count2;
  checkPassword();
});

box3.addEventListener("click", () => {
  count3 = (count3 + 1) % 10; // Cycle through 0-9
  box3.textContent = count3;
  checkPassword();
});

resetButton.addEventListener("click", () => {
  count1 = 0;
  count2 = 0;
  count3 = 0;
  box1.textContent = count1;
  box2.textContent = count2;
  box3.textContent = count3;
  getLinkButton.classList.add("hidden"); // Hide the "Get Link" button on reset
});

getLinkButton.addEventListener("click", () => {
  window.open("https://sankalppictures.github.io/Class-10/", "_blank");
});

function checkPassword() {
  if (count1 === 1 && count2 === 0 && count3 === 0) {
    getLinkButton.classList.remove("hidden"); // Show the "Get Link" button
  } else {
    getLinkButton.classList.add("hidden"); // Hide the "Get Link" button if the password is incorrect
  }
}
