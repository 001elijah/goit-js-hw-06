const listCategories = document.querySelector('#categories');
const itemsInCategories = listCategories.querySelectorAll('li.item');
console.log('Number of categories: ', itemsInCategories.length);
console.log('');
for (let i = 0; i < itemsInCategories.length; i += 1) {
    console.log('Category: ', itemsInCategories[i].querySelector('h2').textContent);
    console.log('Elements: ', itemsInCategories[i].querySelectorAll('li').length);
    if (i !== itemsInCategories.length - 1) console.log('') ;
};