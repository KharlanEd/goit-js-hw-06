function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector('.change-color')
const body = document.querySelector('body')
const spanColor = document.querySelector('.color')

btnColor.addEventListener('click', onBtnColor)

function onBtnColor(evt) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}