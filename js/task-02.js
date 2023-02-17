const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithId = document.querySelector('ul#ingredients');

const createListItem = function (item) {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  return listItem;
};

listWithId.append(...ingredients.map(createListItem));