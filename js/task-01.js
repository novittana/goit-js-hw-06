// Напиши скрипт, який:
// 1.	Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.	Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector('#categories');
const categChildren = categories.children;
const countItem = categChildren.length;
console.log(`Number of categories: ${countItem}`)

// Вивести в айтемах перших дітей та порахувати кількість лі в останніх.

const anim = document.querySelectorAll('.item');
console.log(anim);