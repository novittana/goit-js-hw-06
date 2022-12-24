const categories = document.querySelector("ul#categories");
const countItem = categories.children.length;
console.log(`Number of categories: ${countItem}`);

const firstItemCateg = categories.firstElementChild.firstElementChild.textContent;
 console.log(`Category: ${firstItemCateg}`);
const firstItemCategNum = categories.firstElementChild.children[1].children.length;
console.log(`Elements: ${firstItemCategNum}`);

const secondItemCateg = categories.children[1].firstElementChild.textContent;
console.log(`Category: ${secondItemCateg}`);
const secondItemCategNum = categories.children[1].children[1].children.length;
console.log(`Elements: ${secondItemCategNum}`);

const thirdItemCateg = categories.lastElementChild.firstElementChild.textContent;
console.log(`Category: ${thirdItemCateg}`);
const thirdItemCategNum = categories.lastElementChild.children[1].children.length;
console.log(`Elements: ${thirdItemCategNum}`);