const PALETTE = document.getElementById('color-palette');
const PIXEL_BOARD = document.getElementById('pixel-board');
const SECTION_CONTAINER = document.getElementById('section-container');

window.onload = function() {
  createPaletteColors(['black', 'red', 'blue', 'green']);
  createPixels(25);



  PALETTE.addEventListener('click', colorSelected);
  PIXEL_BOARD.addEventListener('click', function() {
    changePixelColor(colorSelected());
  });
}

function createPaletteColors(colors) {
  for (const index of colors) {
    const PALETTE_COLORS = document.createElement('div');
    PALETTE_COLORS.className = 'color';
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

function colorSelected() {
  return event.target.style.backgroundColor;
}

function changePixelColor(color) {
  event.target.style.backgroundColor = color;
}
