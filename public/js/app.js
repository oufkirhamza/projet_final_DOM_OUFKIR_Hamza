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

let modalBtn = document.querySelector('.modalBtn').children
let loginModal = document.querySelector('.LogInModal')
let signUpModal = document.querySelector('.signUpModal')
let modalFooterBtn = document.querySelector('.modal-footer').children

modalBtn[0].addEventListener('click',()=>{
    loginModal.classList.add("d-none")
    signUpModal.classList.remove("d-none")
    modalFooterBtn[1].innerHTML='Sign up'
})
modalBtn[1].addEventListener('click',()=>{
    loginModal.classList.remove("d-none")
    signUpModal.classList.add("d-none")
    modalFooterBtn[1].innerHTML='Log in'
    
})
let carousel = document.querySelector('.carousell')
let arrowBtn = document.querySelectorAll('.eventCarousel i')
let imgCardWidth = document.querySelector('.eventImg').offsetWidth;
arrowBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
        if (btn.id === "left") {
            carousel.scrollLeft -= 510
        }else{
            carousel.scrollLeft += 510
        }
    })
});

let galleryCarousel = document.querySelector('.carouselGallery');
let arrowBtnGAllery = document.querySelectorAll('.galleryCarousel i');
let galleryCardWidth = document.querySelector('.GalleryImg img').offsetWidth;

arrowBtnGAllery.forEach(btn => {
    btn.addEventListener('click',()=>{
        if (btn.id === "left") {
            galleryCarousel.scrollLeft -= 310
        }else{
            galleryCarousel.scrollLeft += 310
        }
    })
});


