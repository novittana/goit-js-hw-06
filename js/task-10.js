function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const divBoxesRef = document.querySelector("div#boxes");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

let amount;
let boxesArr = [];
let sizeOfSide = 30;

function createBoxes(amount) {
  amount = inputRef.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = sizeOfSide + "px";
    box.style.height = sizeOfSide + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
    sizeOfSide += 10;
    console.log(boxesArr);
  }
  divBoxesRef.append(...boxesArr);
}

console.log(boxesArr);

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
  boxesArr.length = 0; //додала, так як innerHTML не впливає на створений масив, що не дає нам почати створення боксів спочатку.
  sizeOfSide = 30; //Адже, розмір та самі елементи зберігаються від попереднього додавання
}

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
