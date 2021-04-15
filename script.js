const PALETTE = document.getElementById('color-palette');
const PIXEL_BOARD = document.getElementById('pixel-board');
const SECTION_CONTAINER = document.getElementById('section-container');

let corSelecionada = 'black';

window.onload = function () {
  createPaletteColors(['black', 'red', 'blue', 'green']);
  createPixels(25);

  PALETTE.addEventListener('click', colorSelected);
  PIXEL_BOARD.addEventListener('click', function () {
    changePixelColor(corSelecionada);
  });
}

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
  corSelecionada = event.target.id;
}

function changePixelColor(color) {
  event.target.style.backgroundColor = color;
}
