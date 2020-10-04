
const listRef = document.querySelector('#categories');

console.log(`В списке ${listRef.children.length} категории.`);


const liItemRef = listRef.querySelectorAll('li.item');


liItemRef.forEach(({ children }) =>
  console.log(
    `Категория: ${children[0].textContent}\nКоличество элементов: ${children[1].children.length}`,
  ),
);