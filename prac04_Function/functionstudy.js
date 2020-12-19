const info ={
    name : "Joshua",
    age : 29,
    gender : "Male",
    isHandsome : true
}
console.log(info.name);

//console도 object다 그래서 . 으로 하위를 접근할 수있다. 
//log는 Function이다. 
/* 
built-in function (내장함수) ->JS내에 이미 가지고있는것

함수는 기능적인걸 의미함. java의 메소드 라고 이해하면될듯?
    -> 내가 원하는걸 원하는 코드만큼 적는것

*/


//프로그래머는 게으른 종족. 이라고 생각하셈. 그러니까 효과적인걸 하잖아.
//그래서 function을 쓰는 것임 ! 

function sayHello(name, age) /* 함수명() */ { //인자파라미터를 넣는 것. 
    console.log('Hello!', name, "you have", age, " years of age");
}

sayHello("Joshua"); //함수!!!! 
sayHello("Joshua", 15)  //이건 작동하지 않음 매개변수를 넣어주지않으면