function createPalette(colors) {
  const PALETTE = document.getElementById('color-palette');

  for (const index of colors) {
    const PALETTE_COLORS = document.createElement('div');
    PALETTE_COLORS.className = 'pixel';
    PALETTE_COLORS.style.backgroundColor = index;
    PALETTE.appendChild(PALETTE_COLORS);
  }
}

createPalette(['black', 'red', 'blue', 'green']);

function createPixels(pixels) {
  const PIXEL_BOARD = document.getElementById('pixel-board');
  const SECTION_CONTAINER = document.getElementById('section-container');

  SECTION_CONTAINER.style.width = `${40 * Math.sqrt(pixels)}px`;

  for (let index = 0; index < pixels; index += 1) {
    const PIXEL = document.createElement('div');
    PIXEL.className = 'pixel';
    PIXEL_BOARD.appendChild(PIXEL);
  }
}

createPixels(25);
