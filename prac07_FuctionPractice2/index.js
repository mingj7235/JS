const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; //css

function handleClick () {
    const hasClass = title.classList.contains(CLICKED_CLASS); //boolean 을 리턴함
    // if (hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
    //클래스가 거기있는지 체크해서 있으면 add, 없으면 remove ! 위의 if~else를 간단하게 쓰는것임
    //즉 html에서 기본 클래스를 btn으로 줬으니까 여기서는 clicked_class를 toggle로 검색해서 하는것임!
}
function init () {
    title.addEventListener("click", handleClick);
}
init();