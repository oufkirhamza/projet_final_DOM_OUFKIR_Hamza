let Choices = document.querySelector(".foodChoices")
let foodMenu = document.querySelector(".foodMenu")
let eachFoodMenu = foodMenu.children
let foodChoices = Choices.children
foodChoices[0].addEventListener('click',()=>{
    eachFoodMenu[0].classList.remove("d-none")
    eachFoodMenu[1].classList.add("d-none")
    eachFoodMenu[2].classList.add("d-none")
    eachFoodMenu[3].classList.add("d-none")
})
foodChoices[1].addEventListener('click',()=>{
    eachFoodMenu[1].classList.remove("d-none")
    eachFoodMenu[0].classList.add("d-none")
    eachFoodMenu[2].classList.add("d-none")
    eachFoodMenu[3].classList.add("d-none")
})
foodChoices[2].addEventListener('click',()=>{
    eachFoodMenu[2].classList.remove("d-none")
    eachFoodMenu[1].classList.add("d-none")
    eachFoodMenu[0].classList.add("d-none")
    eachFoodMenu[3].classList.add("d-none")
})
foodChoices[3].addEventListener('click',()=>{
    eachFoodMenu[3].classList.remove("d-none")
    eachFoodMenu[1].classList.add("d-none")
    eachFoodMenu[2].classList.add("d-none")
    eachFoodMenu[0].classList.add("d-none")
})