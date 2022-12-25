function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const nameColEl = document.querySelector("span.color");
changeColBtnEl.addEventListener('click', event => {
  let color = getRandomHexColor();
  nameColEl.textContent = color;
  bodyEl.style.backgroundColor = color;
})