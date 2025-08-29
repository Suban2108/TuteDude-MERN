// Get elements
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");

// Greet user
greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello";
  }
});

// Boxes
document.getElementById("red-box").addEventListener("click", () => {
  document.getElementById("red-box").style.background = "red";
});
document.getElementById("blue-box").addEventListener("click", () => {
  document.getElementById("blue-box").style.background = "blue";
  document.getElementById("blue-box").style.color = "white";
});
document.getElementById("green-box").addEventListener("click", () => {
  document.getElementById("green-box").style.background = "green";
  document.getElementById("green-box").style.color = "white";
});
document.getElementById("yellow-box").addEventListener("click", () => {
  document.getElementById("yellow-box").style.background = "yellow";
});
