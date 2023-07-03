function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

const min = Number(document.querySelector('input[type="number"]').getAttribute('min'));
const max = Number(document.querySelector('input[type="number"]').getAttribute('max'));
const step = Number(document.querySelector('input[type="number"]').getAttribute('step'));

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);



function createBoxes() {
  const amount = Number(input.value);
  const boxes = [];

  if (amount < min || amount > max) {
    alert('Value is out of limit');
    return
  } else {
    for (let i = 0; i < amount; i += step) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
  }

  
}





function destroyBoxes() {
  boxesContainer.innerHTML = '';
  input.value = ''; 
  const boxes = [];
}
