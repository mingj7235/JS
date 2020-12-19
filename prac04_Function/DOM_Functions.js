const title = document.getElementById ("title");
console.log(title);

//DOM : JS메우 중요함 !!! html에 있는 것을 객체로 가지고옴
//모든것, 모든 html이 객체가 되는 것이다. 객체는 많은 키를 가지고 있다. 
// DOM : Document Object Model. 
//우리가 찾게될 모든 형태의 function은 DOM으로 변화가 가능함.

//내 페이지에서 JS에서 선택한 것은 모두 객체가된다. 이게 중요함. 


title.innerHTML = "Hi! From JS";
console.dir(title); //title의 dir를 확인할 수 있다. 
title.style.color = "red"; //manipulating html !! JS가 강력하다. 
document.title = "I own you now";

//html을 JS를 통해 변경하고 수정하고 마음껏 바꿀 수있다. 오오...멋있네 cool

const title2 = document.querySelector("#title");

/* 
title로 할 수 있는 모든 것

1. id 속성을 가진 요소를 찾아 객체 반환하기
const title = document.getElementById("title");
2. 내용수정
title.innerHTML = "Hi! From JS"
3.색상변경
title.style.color = "red"
4. 타이틀 변경
document.title = 'I own you now'

이처럼 각종 html 문서를 감지하고 추가하고 변경하는 등의 것들을 js로 객체화 하는 것을 통해 바꿀 수 있다.

document.queryselector()
정의 : queryselector는 특정 name이나 id를 제한하지 않고 css선택자를 사용하여 요소를 찾을 수 있다.

객체를
id로 찾고싶다면 "#title"
class로 찾고 싶다면 ".title"


*/