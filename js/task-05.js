
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange() {
  const name = nameInput.value.trim();

  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
}



// const refs = {
//     input: document.querySelector('#name-input'),
//      nameTitle: document.querySelector('#name-output'),
// }

// refs.input.addEventListener('input', onInputChange);

// function onInputChange() {
//     const name = refs.input.value.trim();
//     if (name === "") {
//         refs.nameTitle.textContent = 'Anonymous';
//     } else {refs.nameTitle.textContent = name}
// }
