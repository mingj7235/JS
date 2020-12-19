const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#e67e22";

function handleCheck () {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }else {
        title.style.color=BASE_COLOR;
    }
}

function init () {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleCheck);
    //moustenter 는 마우스가 닿으면 액션하는 것임
    //엄청 많은 이벤트들이 있다. MDN !!! -> javascript event MDN 을 검색하면 나온다. 

}

init();

//온라인, 오프라인일 때 작동하는 함수... 오오...이런걸 MDN에서 이벤트를 찾아볼 수 있음 
function handleOffline () {
    console.log("Offline")
}

function handleOnline () {
    console.log("Online")
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);