let body = document.querySelector("body")

// --- NAVBAR --- //
// Variables navbar
let btnBlanc = document.getElementsByTagName("button")[1]
let btnNoir = document.getElementsByTagName("button")[2]
let btnConnect = document.getElementsByTagName("button")[3]
let emporium = document.getElementsByTagName("h1")[0]
let a = document.querySelectorAll('a')
let p = document.querySelector('p')
let div = document.querySelectorAll('#products .row div')
let divLearn = document.querySelectorAll('#learnMore .container-fluid .row div')
let modal = document.getElementById('monModal')
let closeModal = document.getElementsByClassName("close")[0]

// Fonctionnalités boutons navbar
btnBlanc.addEventListener("click", () =>{
    body.classList.add("bg-blanc")
    body.classList.remove("bg-noir")
    body.style.color = "black"
    p.style.color = "black"
    
    for (let index = 0; index < 6; index++) {
        a[index].classList.add('text-dark')
        a[index].classList.remove('text-white')
    }

    for (let index = 0; index < 41; index++) {
        div[index].style.border = "solid 5px white"
    }

    for (let index = 0; index < 3; index++) {
        divLearn[index].style.border = "solid 5px white"
    }
})

btnNoir.addEventListener("click", () =>{
    body.classList.remove("bg-blanc")
    body.classList.add("bg-noir")
    body.style.color = "white"
    p.style.color = "black"
    
    for (let index = 0; index < 6; index++) {
        a[index].classList.add('text-white')
        a[index].classList.remove('text-dark')
    }

    for (let index = 0; index < 41; index++) {
        div[index].style.border = "solid 5px black"
    }
    
    for (let index = 0; index < 3; index++) {
        divLearn[index].style.border = "solid 5px black"
        divLearn[index].style.color = "black"
    }
})

btnConnect.addEventListener("click", () => {
    modal.setAttribute("class", "d-flex")

    closeModal.addEventListener("click", () =>{
        modal.setAttribute("class", "d-none")
    })
})

// Sticky top NAVBAR

window.onscroll = function() {myFunction()};

var navbar = document.querySelector('header')
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// --- CAROUSEL --- //
// variables

let carSwitch = document.querySelectorAll('i.fa-dot-circle')
let carContent = document.querySelectorAll('div.car')

// fonctionnalités
carSwitch[0].addEventListener("click", () => {
    for (let i = 0; i < 7; i++) {
        carContent[i].classList.remove('d-none')
        if (i == 4 || i == 5 || i == 6) {
            carContent[i].classList.add('d-none')
        }
    }
})
carSwitch[1].addEventListener("click", () => {
    for (let i = 0; i < 7; i++) {
        carContent[i].classList.remove('d-none')
        if (i == 0 || i == 5 || i == 6) {
            carContent[i].classList.add('d-none')
        }
    }
})
carSwitch[2].addEventListener("click", () => {
    for (let i = 0; i < 7; i++) {
        carContent[i].classList.remove('d-none')
        if (i == 0 || i == 1 || i == 6) {
            carContent[i].classList.add('d-none')
        }
    }
})
carSwitch[3].addEventListener("click", () => {
    for (let i = 0; i < 7; i++) {
        carContent[i].classList.remove('d-none')
        if (i == 0 || i == 1 || i == 2) {
            carContent[i].classList.add('d-none')
        }
    }
})