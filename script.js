const grid = document.querySelector("div.grid");
let size = 16;

function updateGridCells() {
  grid.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style["width"] = 600 / size + "px";
    cell.style["height"] = 600 / size + "px";
    cell.style["background-color"] = "rgb(255, 255, 255)";
    cell.addEventListener("mouseover", hoverHandler);
    grid.appendChild(cell);
  }
}

function hoverHandler(e) {
  let rgb = this.style.backgroundColor.split(", ")[2];
  rgb = +rgb.substring(0, rgb.length - 1);
  this.style.backgroundColor = `rgb(${rgb - 16}, ${rgb - 16}, ${rgb - 16})`;
}

function handleButtonClick() {
  size = Math.min(100, +prompt("Enter size for grid: "));
  updateGridCells();
}

const button = document.querySelector("button");
button.addEventListener("click", handleButtonClick);

updateGridCells;
