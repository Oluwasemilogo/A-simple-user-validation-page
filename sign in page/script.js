const oldheader = document.querySelector(".oldheader")
const oldpart1 = document.querySelector(".oldpart1")
const newpart1 = document.querySelector(".newpart1")
const oldpart2 = document.querySelector(".oldpart2")
const newpart2 =document.querySelector(".newpart2")
const loginbtn = document.querySelector(".login2")
const registerbtn = document.querySelector(".register")

registerbtn.addEventListener('click',() =>{
    oldpart1.style.display = "none"
    newpart1.style.display = "block"
    oldpart2.style.display = "none"
    newpart2.style.display = "block"
    oldheader.textContent = "Create new Account"
})
loginbtn.addEventListener('click',() =>{
       oldpart1.style.display = "block"
    newpart1.style.display = "none"
    oldpart2.style.display = "block"
    newpart2.style.display = "none"
    oldheader.textContent = "Welcome"
})