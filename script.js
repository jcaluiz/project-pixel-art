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
