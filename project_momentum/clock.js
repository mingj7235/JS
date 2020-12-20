const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime () {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

//setInterval(함수, 실행할 시간간격)
// => 함수를 시간간격에 따라 실행시킴 (밀리초 기준이라 1000이 1초임)