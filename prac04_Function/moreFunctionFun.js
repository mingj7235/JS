//""도 String이고 ''도 String임 JS에서는 그렇데 오...ㅋㅅㅋ

//`` << 이게 js가 사용하기 시작한 섹시한 방법임
/* 
``는 (백쉬) '' "" 이것과 너무너무너무너무 다름 veryveryvery different ! 


*/
// function sayHello(name, age) {
//     console.log(`hello ${name} you are ${age} years old`);
// }

//undefined 값을 출력함

//return : 반드시 받아야하는 것 
//greatJoshua는 sayHello 함수의 리턴 값이다. 
//그런데 실제로 실행할대는 undefined 되어있다. 그러므로 return으로 바꿔줘야한다.

function sayHello(name, age) {
    return `hello ${name} you are ${age} years old`;
}
const greetJoshua = sayHello("Joshua", 29) 
console.log(greetJoshua)

//JS는 함수가 리턴할 때 리턴 타입 필요없이 그냥 return을 함수에서 정의해주면 그값이 리턴된다. 
 //object로 선언하고 여기 안에 function을 넣어줄 수 있다. 
const calculator = {
    plus : function(a, b){
        return a + b;
    },
    minus : function(a, b) {
        return a - b;
    },
    multi : function(a, b) {
        return a * b;
    },
    divide : function(a, b) {
        if (b != 0){
            return a / b;
        } else {
            return "cannot divide from 0";
            
        }
    }

}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(40, 80)
const multi = calculator.multi(23, 12)
const divide = calculator.divide(20, 0)
console.log(plus)
console.log(minus)
console.log(multi)
console.log(divide)