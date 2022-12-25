const categories = document.querySelector("ul#categories");
const countItem = categories.children.length;
console.log(`Number of categories: ${countItem}`);

const items = document.querySelectorAll(".item");
console.log(items);

items.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements:${element.lastElementChild.children.length}`);
});
