//이벤트 : 웹에서 일어나는 모든 것들. 

const title = document.querySelector("#title");

function handleClick () {
    title.style.color = "blue";
}


title.addEventListener("click", handleClick);
//handleResize() 와 handleResize의 차이 
/* 
    handleResize()를 하면 바로 적용이됨. 이벤트가 되지도 않았는데 !
    handleResize를 하면 이벤트가 일어나면, 여기서는 리사이징! 그때 저 함수가 발동한다.
*/


