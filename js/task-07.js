const inpFSCEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");     
inpFSCEl.addEventListener('input', event => {
inpFSCEl.value = textEl.style.fontSize;
})