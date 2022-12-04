const list = document.querySelector('#categories')
const totalItems = document.querySelectorAll('.item')
console.log(`Number of categories: ${totalItems.length}`);

const categoriesArray = [...totalItems].map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  ).join("\n");
console.log(categoriesArray);
