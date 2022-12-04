const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ulList = document.querySelector("#ingredients");
const liArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.className = 'item'
  liArray.push(item)
});
ulList.append(...liArray);
console.log(ulList);