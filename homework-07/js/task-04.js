
const refs = {
    buttonDecrement: document.querySelector("[data-action='decrement']"),
    buttonIncrement: document.querySelector("[data-action='increment']"),
    counterValue: document.getElementById("value"),
}

refs.buttonDecrement.addEventListener('click', () => {
     
    let numberValue = Number(refs.counterValue.textContent)
    refs.counterValue.textContent = numberValue - 1      
})


refs.buttonIncrement.addEventListener('click', () => { 
    
    let numberValue = Number(refs.counterValue.textContent)
    refs.counterValue.textContent = numberValue + 1  
})




// способ 2
// const counterValue = document.querySelector("#value");
// const decrementRef = document.querySelector('[data-action="decrement"]');
// const incrementRef = document.querySelector('[data-action="increment"]');

// let valueRef = 0;

// const changeValue = () => {
//   counterValue.textContent = valueRef;
// };

// decrementRef.addEventListener("click", () => {
//   decrement();
//   changeValue();
// });

// incrementRef.addEventListener("click", () => {
//   increment();
//   changeValue();
// });

// const decrement = () => {
//   valueRef -= 1;
// };

// const increment = () => {
//   valueRef += 1;
// };