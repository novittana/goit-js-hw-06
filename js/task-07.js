const inpFSCEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");     
inpFSCEl.addEventListener('input', event => {
  textEl.style.fontSize = (`${inpFSCEl.value}px`);
})