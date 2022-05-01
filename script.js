function createPixel() {
  let pixelBoard = document.getElementById('pixel-board');
  let square = document.createElement('section');
  square.className = 'pixel';
  pixelBoard.appendChild(square);
}
let button = document.querySelector('#generate-board');

// for (let index = 0; index < 25; index += 1) {
//   // for(let index2 = 1; index2 < index; index2 += 1) {


//   }
  button.removeEventListener('click', pixelQuantitative)

button.addEventListener('click', () => {
  let input = document.querySelector('#board-size');
  let pixel = document.getElementsByClassName('pixel');
  let board = document.querySelector('#pixel-board')
  if (input.value === '') {
    alert("Board inválido!");
  }
  if(input.value > 4 || input.value < 51)
  for (let index = 0; index < input.value * input.value - 25; index += 1) {
    createPixel1(colocaCorNosPixels())
  }
  if(input.value > 50)
  for (let index = 0; index < 50 * 50 - 25; index += 1) {
    createPixel1(colocaCorNosPixels())
  }
})

function pixelQuantitative() {
  let input = document.querySelector('#board-size');
  let pixel = document.getElementsByClassName('pixel');
  let button = document.querySelector('#generate-board');
  let board = document.querySelector('#pixel-board')

  function initial() {
    for (let index = 1; index < 26; index += 1) {
      createPixel();
    }
    board.style.width = "216px"
  }
  initial()

}
pixelQuantitative()

function createPixel1() {
  let pixelBoard = document.getElementById('pixel-board');
  let square = document.createElement('section');
  square.className = 'pixel';
  pixelBoard.appendChild(square);
}

function classSelectedAddRemove() {
  function addAndRemoveClassSelected(event) {
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      event.target.classList.add('selected');
    }
  }

  let black = document.querySelector('.black');
  let red = document.querySelector('.red');
  let blue = document.querySelector('.blue');
  let green = document.querySelector('.green');

  black.addEventListener('click', addAndRemoveClassSelected);
  red.addEventListener('click', addAndRemoveClassSelected);
  blue.addEventListener('click', addAndRemoveClassSelected);
  green.addEventListener('click', addAndRemoveClassSelected);
}
classSelectedAddRemove();

function colocaCorNosPixels() {
  let black = document.querySelector('.black');
  let red = document.querySelector('.red');
  let blue = document.querySelector('.blue');
  let green = document.querySelector('.green');
  let selected = document.querySelector('.selected');
  let pixel = document.getElementsByClassName('pixel');

  function colorRandom() {
    let numbersAndLetters = '0123456789ABCDEF';
    let hashtag = '#';

    for (let index = 0; index < 6; index += 1) {
      hashtag += numbersAndLetters[Math.floor(Math.random() * 16)];
    }

    return hashtag;
    //ref: https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
  }
  let color1 = colorRandom();
  let color2 = colorRandom();
  let color3 = colorRandom();
  let black1 = 'black';

  let colorUm = black.style.backgroundColor = black1;

  let colorDois = red.style.backgroundColor = color1;

  let colorTres = blue.style.backgroundColor = color2;

  let colorQuatro = green.style.backgroundColor = color3;

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      if (black.classList.contains('selected')) {
        pixel[index].classList.remove('red');
        pixel[index].classList.remove('blue');
        pixel[index].classList.remove('green');
        pixel[index].classList.remove('white');
        event.target.classList.add('black');
        event.target.style.backgroundColor = colorUm;
      }
      if (red.classList.contains('selected')) {
        pixel[index].classList.remove('black');
        pixel[index].classList.remove('blue');
        pixel[index].classList.remove('green');
        pixel[index].classList.remove('white');
        event.target.classList.add('red');
        event.target.style.backgroundColor = colorDois;
      }
      if (blue.classList.contains('selected')) {
        pixel[index].classList.remove('black');
        pixel[index].classList.remove('red');
        pixel[index].classList.remove('green');
        pixel[index].classList.remove('white');
        event.target.classList.add('blue');
        event.target.style.backgroundColor = colorTres;
      }
      if (green.classList.contains('selected')) {
        pixel[index].classList.remove('black');
        pixel[index].classList.remove('blue');
        pixel[index].classList.remove('red');
        pixel[index].classList.remove('white');
        event.target.classList.add('green');
        event.target.style.backgroundColor = colorQuatro;
      }
    })
  }
}
colocaCorNosPixels()

function clearBoard() {
  let clearBoard = document.querySelector('#clear-board');
  let pixel = document.getElementsByClassName('pixel');

  clearBoard.addEventListener('click', function () {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  })
}
clearBoard();

function pixelAlturaLargura() {
  function createPixel() {
    let pixelBoard = document.getElementById('pixel-board');
    let square = document.createElement('section');
    let alturaLargura = document.querySelectorAll('.pixel');
    square.className = 'pixel';
    pixelBoard.appendChild(square);
    for (let index = 0; index < alturaLargura.length; index += 1) {
      alturaLargura[index].style.height = parseInt(input.value) + 'px';
      alturaLargura[index].style.width = parseInt(input.value) + 'px';
    }
  }
  let input = document.querySelector('#board-size');
  let button = document.querySelector('#generate-board');
  let pixelBoard = document.querySelector('#pixel-board');
  button.addEventListener('click', function () {
    let alturaLargura = document.querySelectorAll('.pixel');
    for (let index = 0; index < alturaLargura.length; index += 1) {
      if (parseInt(input.value) > 4 && parseInt(input.value) < 51) {
        alturaLargura[index].style.height = parseInt(input.value) + 'px';
        alturaLargura[index].style.width = parseInt(input.value) + 'px';
      }
    }
  })
}
pixelAlturaLargura();

