const oldheader = document.querySelector(".oldheader")
const oldpart1 = document.querySelector(".oldpart1")
const newpart1 = document.querySelector(".newpart1")
const oldpart2 = document.querySelector(".oldpart2")
const newpart2 =document.querySelector(".newpart2")
const loginbtn = document.querySelector(".login2")
const registerbtn = document.querySelector(".register")
const emailErr = document.querySelector(".emailErr")
const userErr = document.querySelector(".userErr")
const incorrectDetails = document.querySelector(".incorrectDetails")
const signupNew = document.querySelector(".signup")
const loginBTN = document.querySelector(".login")
const welcomeBack = document.querySelector(".welcome_back")
let firstname = document.querySelector("#fname")
let lastname = document.querySelector("#Lname")
let username = document.querySelector("#Uname")
let email = document.querySelector("#emial")
let password = document.querySelector("#paword")
let oldemail = document.querySelector("#oldEmail")
let oldpword = document.querySelector("#oldpword")
let torusImg = document.querySelector(".torusImg2")


const databases = [{
    firstname:"semilogo",
    lastname:"bamidele",
    username:"logoh",
    email:"semilogo@gmail.com",
    password:"semilogo123"
},
{
    firstname:"josiah",
    lastname:"ademeso",
    username:"jojo123",
    email:"jojo@gmail.com",
    password:"jojoademeso1"
}]


class oldUser {
    constructor(email,password,databases){
    this.email = email;
    this.password = password;
    this.databases = databases || [];
    }
    validateInfo(){
        console.log("gghfj");
        for (let i = 0; i < this.databases.length; i++){
        if (this.email !== this.databases[i].email || this.password !== this.databases[i].password){
        incorrectDetails.textContent = "Email or password invalid";
        incorrectDetails.style.color = "red";
} else{
    console.log("ghj");
    incorrectDetails.remove();
    const userFirstname = this.databases.filter((database)=>{
        if(this.email===database.email){
            return database;
        }
    })
    welcomeBack.textContent = `Welcome Onboard, ${userFirstname[0].firstname}`;
    torusImg.style.right = "29%";
    torusImg.style.top = "-11em";
    torusImg.style.animation = "rotate 12s ease-in-out alternate infinite";
    oldheader.textContent = `Welcome Onboard, ${userFirstname[0].firstname}`;
    oldpart1.style.display = "none";
    newpart1.style.display = "none";
    oldpart2.style.display = "none";
    newpart2.style.display = "none";
}
}
}
}


class newUser {
    constructor(firstname,lastname,username,email,password,databases)
{
    this.firstname = firstname; 
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.databases = databases  || [];
}

saveUserInfo(){
    this.databases.push({
        firstname:this.firstname,
        lastname:this.lastname,
        username:this.username,
        email:this.email,
        password:this.password
    })
}

validateEmail(){
    for(let i = 0; i < this.databases.length; i++){
        if(this.email === this.databases[i].email){
            emailErr.style.color = "red";
            emailErr.textContent = "Email exists already!";
            return;
        } else if(this.email === ""){
            emailErr.style.color = "red";
            emailErr.textContent = "no email entered";
            return;
        }
        else{
            this.saveUserInfo();
    oldpart1.style.display = "block";
    newpart1.style.display = "none";
    oldpart2.style.display = "none";
    newpart2.style.display = "none";
    oldheader.style.color = "#3939AB";
    oldheader.textContent = `Kindly Sign in now, ${this.firstname}`;
    incorrectDetails.textContent = "";
    console.log(databases);
        }
}
}
validateUser(){
    for(let i = 0; i < this.databases.length; i++){
        if(this.username === this.databases[i].username){
            userErr.style.color = "red";
            userErr.textContent = "Username exists already!";
        } else if (this.username === ""){
            userErr.style.color = "red";
            userErr.textContent = "No username entered";
            return;
        }
}
}
}

loginBTN.addEventListener('click',() =>{
    let user3 = new oldUser(oldemail.value,oldpword.value,databases);
    user3.validateInfo();
})

signupNew.addEventListener('click',() =>{
let user2 = new newUser(firstname.value,lastname.value,username.value,email.value,password.value,databases);
user2.validateEmail();
user2.validateUser();
})

console.log(databases);


registerbtn.addEventListener('click',() =>{
    oldpart1.style.display = "none"
    newpart1.style.display = "block"
    oldpart2.style.display = "none"
    newpart2.style.display = "block"
    oldheader.textContent = "Create new Account"
    
})

loginbtn.addEventListener('click',() =>{
    oldpart1.style.display = "block";
    newpart1.style.display = "none";
    oldpart2.style.display = "block";
    newpart2.style.display = "none";
    oldheader.textContent = "Welcome";
})