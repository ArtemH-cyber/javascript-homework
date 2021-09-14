const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listUl = document.getElementById("ingredients")


// засовуем в ф-ию
const makeProduct = (options) => {
  return options.map(options => {
  const elementLi = document.createElement('li')
  elementLi.textContent = options
    return elementLi
  }) 
}

const elements = makeProduct(ingredients)
listUl.append(...elements)
console.log(listUl)



// const elements = ingredients.map(options => {
//   const elementLi = document.createElement('li')
//   elementLi.textContent = options
// return elementLi
// })

// listUl.append(...elements)
// console.log(listUl)