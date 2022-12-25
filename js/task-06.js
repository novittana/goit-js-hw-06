const userInputEl = document.querySelector("#validation-input");

userInputEl.addEventListener("blur", (event) => {
  const minInpLength = Number(userInputEl.dataset.length);
  let userInpLength = Number(userInputEl.value.length);

  let borderStyle;
  if (userInpLength !== minInpLength) {
    borderStyle = userInputEl.classList.add("invalid");
    userInputEl.classList.remove("valid");
  } else {
    borderStyle = userInputEl.classList.add("valid");
    userInputEl.classList.remove("invalid");
  }
  return borderStyle;
});
