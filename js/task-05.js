let userNameInputEl = document.querySelector("input#name-input");
let userNameOutputEl = document.querySelector("span#name-output");

userNameInputEl.addEventListener("input", (event) => {
    if (userNameInputEl.value === 0 || userNameInputEl.value === '') {
      userNameOutputEl.textContent = "Anonymous";
    } else {
        userNameOutputEl.textContent = userNameInputEl.value;
    }
    return userNameOutputEl.textContent;
});

