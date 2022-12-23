const userInputEl = document.querySelector("#validation-input");

userInputEl.addEventListener("blur", (event) => {
  const minInpLength = userInputEl.dataset.length;
  let userInpLength = userInputEl.value.length;
  if (userInpLength === minInpLength) {
    userInputEl.classList.toggle("valid");
  } else {
    userInputEl.classList.toggle("invalid");
  }
});

// const minInpLength = userInputEl.getAttribute("data-length"); // console.log(userInputEl.dataset.length);
