const categoriesList = document.querySelector('#categories');
const categoriesItems = [...categoriesList.children];

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const elements = item.children.length;

    console.log(`Category: ${categoryName}`);
     console.log(`Elements: ${elements}`);
})



// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log('Number of categories:', categoriesItems.length);

// categoriesItems.forEach(item => {
//     const categoryName = item.querySelector('h2').textContent;
//     const elements = item.querySelectorAll('li').length;

//     console.log(`Category: ${categoryName}`);
//      console.log(`Elements: ${elements}`);
// })


