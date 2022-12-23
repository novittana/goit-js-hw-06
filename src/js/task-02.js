const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredList = document.querySelector("#ingredients");

function makeIngrCards(arr, list) {
  let newArray = [];
  for (const arg of arr) {
    const ingredItem = document.createElement("li");
    ingredItem.classList.add("item");
    ingredItem.textContent = arg;
    newArray.push(ingredItem);
  }
  list.append(...newArray);
}

makeIngrCards(ingredients, ingredList);
