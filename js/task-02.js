const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector('#ingredients');
const ingridientsListItems = ingredients.map(ingridient => {
  const item = document.createElement('li');
  item.textContent = ingridient;
  item.classList.add('item');
  return item;
}
);
ingridientsList.append(...ingridientsListItems);


// Option 2
// const foo = (options) => {
//   return options.map(ingridient => {
//     const item = document.createElement('li');
//     item.textContent = ingridient;
//     item.classList.add('item');
//     return item;
//   });
// }

// const ingridientsListItems = foo(ingredients);
// ingridientsList.append(...ingridientsListItems);





// Option 3
// const container = document.querySelector('#ingredients');
// const markup = ingredients.map(ingridient => `<li class="item"> ${ingridient} </li>`).join("");
// container.insertAdjacentHTML("beforeend",markup)



