let btn = document.querySelector("button")
let modal = document.querySelector(".modal-parent")
let X = document.querySelector(".X")
let center = document.querySelector(".center")

btn.addEventListener("click",funcil)
X.addEventListener("click",funclo)
document.body.addEventListener("keydown",funkey)

function funcil () {
    modal.style.display = "block"
    center.style.filter = "blur(10px)"
}

function funkey (esf) {
    if(esf.keyCode === 27){
        funclo ()
    }
}

function funclo () {
    modal.style.display = "none"
    center.style.filter = "blur(0px)"
}











