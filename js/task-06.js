const userInputEl = document.querySelector("#validation-input");

userInputEl.addEventListener("blur", (event) => {
  const minInpLength = userInputEl.dataset.length;
  let userInpLength = userInputEl.value.length;
  if (userInpLength !== minInpLength) {
    userInputEl.classList.add("invalid");
  } else {
    userInputEl.classList.add("valid");
  }
});

// const minInpLength = userInputEl.getAttribute("data-length"); // console.log(userInputEl.dataset.length);
