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
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, 변수명   ];

    Object

*/

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log(daysOfWeek[2]); //자바랑 같이 index를 가지고, 똑같네 오오오.. 개쉬움
