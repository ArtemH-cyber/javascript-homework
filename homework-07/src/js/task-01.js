
const categoriesByTag = document.querySelectorAll('.item')
console.log(`В списке ul#categories ${categoriesByTag.length} категории:`)


document.querySelectorAll(".item h2")
    .forEach(elem => console.log(`Категория: ${elem.textContent},
     Количество элементов: ${elem.nextElementSibling.children.length}`))


 