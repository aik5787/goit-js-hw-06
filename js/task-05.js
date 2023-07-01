const refs = {
    input: document.querySelector('#name-input'),
     nameTitle: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    refs.nameTitle.textContent = refs.input.value;
}