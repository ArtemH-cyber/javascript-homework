
const refs = {
    text: document.querySelector('#text'),
    input: document.querySelector('#font-size-control'),
}

refs.input.addEventListener('input', onSpanText)

    
    function onSpanText () {
    refs.text.setAttribute("style", `font-size: ${refs.input.value}px`)
}

