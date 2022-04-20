// stn = section
// btn = button
// ipt = input

const STN_COLOR_PALETTE = document.getElementById('color-palette');
const STN_PIXEL_BOARD = document.getElementById('pixel-board');
const BTN_CLEAR_BOARD = document.getElementById('clear-board');
const IPT_BOARD_SIZE = document.getElementById('board-size');
const BTN_GENERATE_BOARD = document.getElementById('generate-board');

let lastTarget;

function createPaletteColors(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    const PIXEL = document.createElement('div');
    PIXEL.className = 'color';
    PIXEL.style.backgroundColor = colors[index];
    STN_COLOR_PALETTE.appendChild(PIXEL);
  }
}

function defaultColor() {
  lastTarget = STN_COLOR_PALETTE.firstChild;
  lastTarget.classList.add('selected');
}

function defaultInputValue() {
  IPT_BOARD_SIZE.value = 5;
}

// código abaixo resolvido com a ajuda de Alberto e Vinicius
// Vinicius: https://github.com/vinigofr
// Alberto: https://github.com/AlbertoSCandido
function colorSelected(event) {
  if (lastTarget !== event.target) {
    lastTarget.classList.remove('selected');
    lastTarget = event.target;
    lastTarget.classList.add('selected');
  }
}

function setLimit() {
  if (IPT_BOARD_SIZE.value === '') {
    alert('Board Inválido!');
  } else if (IPT_BOARD_SIZE.value > 50) {
    IPT_BOARD_SIZE.value = 50;
  } else if (IPT_BOARD_SIZE.value < 5) {
    IPT_BOARD_SIZE.value = 5;
  }
}

function createPixels() {
  setLimit();
  const MAX_PIXELS = IPT_BOARD_SIZE.value * IPT_BOARD_SIZE.value;
  STN_PIXEL_BOARD.innerHTML = '';
  STN_PIXEL_BOARD.style.width = `${IPT_BOARD_SIZE.value * 40}px`;
  for (let index = 0; index < MAX_PIXELS; index += 1) {
    const PIXEL = document.createElement('div');
    PIXEL.className = 'pixel';
    STN_PIXEL_BOARD.appendChild(PIXEL);
  }
}

function changePixelColor(event) {
  const EVENTO = event.target;
  EVENTO.style.backgroundColor = lastTarget.style.backgroundColor;
}

function clearBoard() {
  for (let index = 0; index < STN_PIXEL_BOARD.children.length; index += 1) {
    STN_PIXEL_BOARD.children[index].style.backgroundColor = 'white';
  }
}

function randomColors() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  return `rgb(${R}, ${G}, ${B})`;
}

window.onload = () => {
  createPaletteColors(['black', randomColors(), randomColors(), randomColors()]);
  defaultColor();
  defaultInputValue();
  createPixels();

  STN_COLOR_PALETTE.addEventListener('click', colorSelected);
  STN_PIXEL_BOARD.addEventListener('click', changePixelColor);
  BTN_GENERATE_BOARD.addEventListener('click', createPixels);
  BTN_CLEAR_BOARD.addEventListener('click', clearBoard);
};
