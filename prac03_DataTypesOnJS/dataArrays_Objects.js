// Data정렬
/* 
    1) Array : 리스트처럼 정렬
        ex> const monday = "Mon";
        const tue = "Tue";
        const Wed = "Wed";
        const Thu = "Thu";
        const Fri = "Fri";
        => 이건 효과적이지 않다. 

        Arrays는 여러 string들을 하나로 묶는것임
        ex> const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
        Array는 안에 규칙이 있음  -> JAVA와 똑같이 Index를 가진다. 
        다른점은, 타입이 달라도 다 담을 수 있다. 이건 개쩌네...
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, 변수명 ];
        아니 근데 왜 어떻게 왜때문에 type이 다 다른데 array에 담을수있지;

    2) Object
        : Object는 각 value에 이름을 줄수있다. 
        array는 각각의 값을 얻으려면 인덱스로 접근하면된다. 

        const info = ["Joshua", "55", true, "Seoul"];
        arrya로 이렇게 만들면 비효율적임. 각각의 정보가 내가 원하는 정보의 산출이 아니잖슴
        그래서 각각의 값에 이름을 부여할 수 잇게끔 가능함. 그게 Object임
        1. array를 만들고, {} 이것을 사용함
        const info = {"Joshua", "55", true, "Seoul"};
        2. label을 주는것임
        const info ={
            name : "Joshua",
            age : 29,
            gender : "Male",
            isHandsome : true
        }
        각각의 value값은 변수를 선언한거라 생각하면된다.
        접근할때는
        console.log (info.gender);
        이렇게 접근!
        수정할때는
        info.gender = "Female" 요렇게!

*/

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const blahblah =  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, 변수명];
console.log(daysOfWeek[2]); //자바랑 같이 index를 가지고, 똑같네 오오오.. 개쉬움
const info ={
    name : "Joshua",
    age : 29,
    gender : "Male",
    isHandsome : true
}

console.log(info.age);
//이렇게 접근 하는 것임
//수정하려면
info.name = "Nicolas";
//Object안에 Array를 넣을 수도있다. 
const info ={
    name : "Joshua",
    age : 29,
    gender : "Male",
    isHandsome : true,
    favMovies : ["신과함께", "반지의제왕"],
    favFood : [{
        name : "Kimchi", fatty : false
    }, 
    {
        name : "cheese burger", fatty: true
    }]
}
console.log(info);
console.log(info.favFood[0].name);





