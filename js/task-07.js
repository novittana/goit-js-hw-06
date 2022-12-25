const inpFSCEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

textEl.style.fontSize = 56 + "px"; //так як при завантаженні сторінки повзунок, що регулює шрифт, знаходиться на середині

inpFSCEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${inpFSCEl.value}px`;
});
