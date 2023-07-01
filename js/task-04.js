const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let count = 0;

decrementBtn.addEventListener('click', decrementFoo);
incrementBtn.addEventListener('click', incrementFoo);


function decrementFoo () {
    count -= 1;
    counterValue.textContent = count;
}

function incrementFoo () {
    count += 1;
    counterValue.textContent = count;
}