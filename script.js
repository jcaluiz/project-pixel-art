function colorRandom() {
  const numbersAndLetters = '0123456789ABCDEF';
  let hexDec = '#';
  for (let index = 0; index < 6; index += 1) {
    hexDec += numbersAndLetters[Math.floor(Math.random() * 16)];
  }
  return hexDec;
}

const colorFixBoard = () => {
  const color2 = colorRandom();
  const color3 = colorRandom();
  const color4 = colorRandom();
  const secoundColor = document.querySelector('.secound-color');
  const thirdColor = document.querySelector('.third-color');
  const fourthColor = document.querySelector('.fourth-color');
  secoundColor.style.backgroundColor = color2;
  thirdColor.style.backgroundColor = color3;
  fourthColor.style.backgroundColor = color4;
  return {
    color2,
    color3,
    color4,
  };
};

const createPixel = () => {
  const pixelBoard = document.getElementById('pixel-board');
  const square = document.createElement('section');
  square.className = 'pixel pixel-size';
  pixelBoard.appendChild(square);
};

const create25Pixels = () => {
  for (let index = 0; index < 25; index += 1) {
    createPixel();
  }
};

let colorSelected = 'black-color';
const classSelected = () => {
  let colors = document.getElementsByClassName('color');
  colors = [...colors].map((color) => color);
  colors.map((color) => color.addEventListener('click', (event) => {
    colors.map((color1) => color1.classList.remove('selected'));
    event.target.classList.add('selected');
    if (color.classList.contains('selected')) { /* eslint-disable */
      colorSelected = color.className.match(/\w*-color/)[0];
    }
  }));
};

const { color1 = 'black', color2, color3, color4 } = colorFixBoard();
const colorsPalette = {
  'black-color': color1,
  'secound-color': color2,
  'third-color': color3,
  'fourth-color': color4,
  'white-color': 'white',
};

classSelected();

const colorFill = () => {
  let pixels = document.getElementsByClassName('pixel');
  pixels = [...pixels].map((pixel) => pixel);
  pixels.map((pixel) => pixel.addEventListener('click', (event) => {
    event.target.style.backgroundColor = colorsPalette[colorSelected];
  }));
};

const removeAndCreatePixel = () => {
  const pixelSize = document.querySelector('.pixel');
  const boardSize = document.querySelector('#pixel-board');
  if (Number(inputSize.value) >= 5 && Number(inputSize.value) < 51 && inputSize.value !== '') {
    removePixel();
    const boardBoard = Number(inputSize.value) * 2;
    const amountOfPixels = Number(inputSize.value) * Number(inputSize.value);
    for (let index = 0; index < amountOfPixels; index += 1) {
      createPixel();
    }
    colorFill();
    boardSize.style.width = `${40 * Number(inputSize.value) + boardBoard}px`;
  } else {
    return alert('Board inválido!');
  }
}

const clearBoard = () => {
  const clearBoard = document.querySelector('#clear-board');
  let pixels = document.getElementsByClassName('pixel');
  pixels = [...pixels].map((pixel) => pixel);
  clearBoard.addEventListener('click', () => removeAndCreatePixel());
};

const removePixel = () => {
  const pixelBoard = document.getElementById('pixel-board');
  let pixels = document.getElementsByClassName('pixel');
  pixels = [...pixels].map((pixel) => pixel);
  pixels.map((pixel) => pixelBoard.removeChild(pixel));
};

const inputSize = document.querySelector('#board-size');
inputSize.value = '5';

const pixelSize = () => {
  const generateBoard = document.querySelector('#generate-board');
  inputSize.addEventListener('change', () => {
    generateBoard.addEventListener('click', () => {
      removeAndCreatePixel();
    });
  });
};

create25Pixels();
colorFill();
clearBoard();
pixelSize();
