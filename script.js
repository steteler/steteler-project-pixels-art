createPalette();
createPixels(25);


function createPalette () {
  const COLORS = ['black', 'red', 'blue', 'green'];
  const PALETTE = document.getElementById('color-palette');

  for (let index in COLORS) {
    const PALETTE_COLORS = document.createElement('div');
    PALETTE_COLORS.className = 'pixel';
    PALETTE_COLORS.style.backgroundColor = COLORS[index];
    PALETTE.appendChild(PALETTE_COLORS);
  }
}


function createPixels(pixels) {
  const PIXEL_BOARD = document.getElementById('pixel-board');
  const SECTION_CONTAINER = document.getElementById('section-container');

  SECTION_CONTAINER.style.width = (40 * Math.sqrt(pixels)) + 'px';

  for (let index = 0; index < pixels; index += 1) {
    const PIXEL = document.createElement('div');
    PIXEL.className = 'pixel';
    PIXEL_BOARD.appendChild(PIXEL);
  }
}