// if (10>5) {
//     console.log('hi');
// } else {
//     console.log('ho');
// }

if (10 === 5 ){ //js는 === 세개씀
    console.log('hi');
} else {
    console.log('ho');
}

// ho!

//피연산자

if (20 > 5 && "nicolas" === "nicolas") {
    console.log('yes');
}else {
    console.log('no');
}


if (20 > 5 || "nicolas" === "nicolas") {
    console.log('yes');
}else {
    console.log('no');
}

const age = prompt ("How old are you");
//prompt는 old API다 . 오래된것임
console.log(age);

if (age> 18) {
    console.log ('you cna drink');
}
else {
    console.log('you cant');
}