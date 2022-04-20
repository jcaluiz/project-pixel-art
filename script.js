function createPixelInBord() {
  function createPixel() {
    let pixelBoard = document.getElementById('pixel-board');
    let square = document.createElement('section');
    square.className = 'pixel';
    pixelBoard.appendChild(square)
    let pixel = pixelBoard.appendChild(square);
    pixel.style.display = 'inline-block'
  }
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();
  createPixel();

}
createPixelInBord();

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
    
    for(let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener('click', function (event) {
          if(black.classList.contains('selected')) {
            pixel[index].classList.remove('red');
            pixel[index].classList.remove('blue');
            pixel[index].classList.remove('green');
            pixel[index].classList.remove('white');
            event.target.classList.add('black');
          } if(red.classList.contains('selected')) {
            pixel[index].classList.remove('black');
            pixel[index].classList.remove('blue');
            pixel[index].classList.remove('green');
            pixel[index].classList.remove('white');
            event.target.classList.add('red');
          } if(blue.classList.contains('selected')) {
            pixel[index].classList.remove('black');
            pixel[index].classList.remove('red');
            pixel[index].classList.remove('green');
            pixel[index].classList.remove('white');
            event.target.classList.add('blue');
          } if(green.classList.contains('selected')) {
            pixel[index].classList.remove('black');
            pixel[index].classList.remove('blue');
            pixel[index].classList.remove('red');
            pixel[index].classList.remove('white');
            event.target.classList.add('green');
          } 
        })
    }
}
colocaCorNosPixels()

function clearBoard() {
    let clearBoard = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    
    clearBoard.addEventListener('click', function() {
    for(let index = 0; index < pixel.length; index += 1) {
            pixel[index].classList.add('white')
        }
    })
}
clearBoard();


