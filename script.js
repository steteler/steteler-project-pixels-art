const PALETTE = document.getElementById('color-palette');
const PIXEL_BOARD = document.getElementById('pixel-board');
const SECTION_CONTAINER = document.getElementById('section-container');
const CLEAR_BUTTON = document.getElementById('clear-board');

let corSelecionada = 'black';
let lastTarget;

function createPaletteColors(colors) {
  for (const index of colors) {
    const PALETTE_COLORS = document.createElement('div');
    PALETTE_COLORS.className = 'color';
    PALETTE_COLORS.id = index;
    PALETTE_COLORS.style.backgroundColor = index;
    PALETTE.appendChild(PALETTE_COLORS);
  }
}

function createPixels(pixels) {
  SECTION_CONTAINER.style.width = `${40 * Math.sqrt(pixels)}px`;

  for (let index = 0; index < pixels; index += 1) {
    const PIXEL = document.createElement('div');
    PIXEL.className = 'pixel';
    PIXEL_BOARD.appendChild(PIXEL);
  }
}

// código abaixo resolvido com a ajuda de Alberto e Vinicius
// Vinicius: https://github.com/vinigofr
// Alberto: https://github.com/AlbertoSCandido
function colorSelected() {
  if (lastTarget !== event.target.id && lastTarget !== undefined) {
    lastTarget.classList.remove('selected');
    corSelecionada = event.target.id;
    lastTarget = event.target.classList.add('selected');
  }
  else {
    lastTarget = event.target;
    PALETTE.firstChild.classList.remove('selected');
    colorSelected();
  }
  lastTarget = event.target;
}

function changePixelColor(color) {
  event.target.style.backgroundColor = color;
}

function clearBoard() {
  for (const index of PIXEL_BOARD.children) {
    index.style.backgroundColor = 'white';
  }
}

window.onload = function () {
  createPaletteColors(['black', 'red', 'blue', 'green']);
  createPixels(25);
  PALETTE.firstChild.classList.add('selected');

  PALETTE.addEventListener('click', colorSelected);
  PIXEL_BOARD.addEventListener('click', function () {
    changePixelColor(corSelecionada);
  });
  CLEAR_BUTTON.addEventListener('click', clearBoard);
}