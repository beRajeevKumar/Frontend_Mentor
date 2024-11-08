// Array of light colors for card and box
const colors = [
  { cardColor: "#ffb3e6", boxColor: "#d5006d" }, // Light Pink and Dark Pink
  { cardColor: "#b3ffb3", boxColor: "#009900" }, // Light Green and Dark Green
  { cardColor: "#a3c2ff", boxColor: "#0051ff" }, // Light Blue and Dark Blue
  { cardColor: "#ffe6b3", boxColor: "#cc9900" }, // Light Yellow and Dark Yellow
  { cardColor: "#b3e0ff", boxColor: "#0091c1" }, // Light Cyan and Dark Cyan
  { cardColor: "#ffb3b3", boxColor: "#ff3d3d" }, // Light Red and Dark Red
  { cardColor: "#b3fff7", boxColor: "#009688" }, // Light Teal and Dark Teal
];
// Function to get a random color object from the array
function getRandomColorObject() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Set random background color for .box and .card elements
const boxes = document.querySelectorAll(".box");
const cards = document.querySelectorAll(".card");

boxes.forEach((box) => {
  const { boxColor } = getRandomColorObject();
  box.style.backgroundColor = boxColor;
});

cards.forEach((card) => {
  const { cardColor } = getRandomColorObject();
  card.style.backgroundColor = cardColor;
});
