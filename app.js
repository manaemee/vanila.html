const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden";
const USERNAME = "username";

function loginSubmit(event){
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    paintGrettings(username);
    }

function paintGrettings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}


loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
} else{
   paintGrettings(savedUsername);
}