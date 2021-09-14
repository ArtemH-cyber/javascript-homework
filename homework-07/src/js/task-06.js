
const input =  document.querySelector("#validation-input")

input.addEventListener('blur', onInputColor)

function onInputColor(event) {  
    event.currentTarget.value.length === Number(input.dataset.length) ?
        input.classList.remove('invalid') & input.classList.add('valid') :
        input.classList.remove('valid') & input.classList.add('invalid');
    console.log(event)
}



