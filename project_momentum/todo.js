const toDoForm = document.querySelector (".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector (".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); //JS의 모든 오브젝트를 JSON을 통해 String으로 변환시켜줌
    //JSON : 데이터를 전달 할 때 JS가 그걸 다룰 수 있도록 object로 바꿔주는 기능이다. 
    //js의 object를 String으로 바꿔주기도하고 반대도해준다. 
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "x";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        //JSON으로 파싱해온것임
        parsedToDos.forEach(function(toDo){ //forEach는 array에 담긴것을 각각 불러 오는 것임 
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();