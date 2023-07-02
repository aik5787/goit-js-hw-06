function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChangeColorEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textColorEl.textContent = randomColor;
}
