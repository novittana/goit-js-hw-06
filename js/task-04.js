let value = document.querySelector("#value");
let counterValue = 0;

const decrBtn = document.querySelector('[data-action="decrement"]');
decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  return value.textContent = counterValue;
});

const incrBtn = document.querySelector('[data-action="increment"]');
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  return (value.textContent = counterValue);
});

