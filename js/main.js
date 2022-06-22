const body = document.getElementById("principal")
const menuB = document.getElementById("menuB")
const menuD = document.getElementById("menuD")
const userB = document.getElementById("userB")
const userD = document.getElementById("userD")
let menuA = false
let userA = false
body.addEventListener("click", (e) => {
    if (!e.target.parentElement.classList.contains("menu")) {
        menuA = false
        menuD.style.display = "none"
    }
    if (!e.target.parentElement.classList.contains("user")) {
        userA = false
        userD.style.display = "none"
    }
})
menuB.addEventListener("click", () => {
    menuA = !menuA
    if (menuA) {
        menuD.style.display = "inherit"
    }
    else {
        menuD.style.display = "none"
    }
})
userB.addEventListener("click",()=>{
    userA=!userA
    if(userA){
        userD.style.display="inherit"
    }
    else{
        userD.style.display="none"
    }
})