const userInputEl = document.querySelector("#validation-input");

userInputEl.addEventListener("blur", (event) => {
  const minInpLength = Number(userInputEl.dataset.length);
  let userInpLength = userInputEl.value.length;

  let borderStyle;
  if (userInpLength === minInpLength) {
    console.log(userInpLength === minInpLength);
    borderStyle = userInputEl.classList.add("valid");
  } else {
    borderStyle = userInputEl.classList.add("invalid");
  }
  borderStyle;
});
