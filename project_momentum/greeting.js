const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //디폴트로 되어진 이벤트를 막는 것임. 예를들어 submit을 하면 날아가는게 디폴트임
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName () {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}


function paintGreeting (text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName () {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //nobody 
        askForName();
    }else {
        //anyone
        paintGreeting(currentUser);
    }
}

function init () {
    loadName();
}

init ();

//localStorage : 로컬스토리지에 있는 정보를 변경할 수 있다. ;