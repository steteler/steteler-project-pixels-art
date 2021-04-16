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
function colorSelected(event) {
  if (corSelecionada !== event.target.id) {
    lastTarget.classList.remove('selected');
    lastTarget = event.target;
    corSelecionada = event.target.id;
    selectCurrentColor();
  }
}

function selectCurrentColor() {
  for(let index of PALETTE.children) {
    if (corSelecionada === index.id) {
      index.classList.add('selected');
      lastTarget = index;
    }
  }
}

function changePixelColor(event) {
  event.target.style.backgroundColor = corSelecionada;
}

function clearBoard() {
  for (const index of PIXEL_BOARD.children) {
    index.style.backgroundColor = 'white';
  }
}

window.onload = () => {
  createPaletteColors(['black', 'red', 'blue', 'green']);
  createPixels(25);
  selectCurrentColor();

  PALETTE.addEventListener('click', colorSelected);
  PIXEL_BOARD.addEventListener('click', changePixelColor);
  CLEAR_BUTTON.addEventListener('click', clearBoard);
};
