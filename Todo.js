// Add gap between todo items
//const style = document.createElement('style');
//style.innerHTML = `.todo-item { margin-bottom: 12px; }`;
//document.head.appendChild(style);
todo=[
    {text:"Learning HTML",uno:1},
    {text:"Learning CSS",uno:2},
    {text:"Learning JavaScript",uno:3},
    {text:"Learning React",uno:4},
    {text:"Learning Node.js",uno:5},
]
let addTodoButton=document.getElementById("addTodoButton");








function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement=document.getElementById(checkboxId);
    let labelElement=document.getElementById(labelId);
    labelElement.classList.toggle("checked");

}
function onDeleteStatusChange(todoId){
    let todoElement = document.getElementById(todoId);
    let itemcontainer = document.getElementById("item-container");
    itemcontainer.removeChild(todoElement);
}


function todoList(todo) {

let checkboxId = "checkbox" + todo.uno;
let labelId = "label" + todo.uno;
let todoId = "todo" + todo.uno;

let itemcontainer = document.getElementById("item-container");
let todoele = document.createElement("li");
todoele.classList.add('todo-item', 'd-flex', 'flex-row');
todoele.id = todoId;

// Create checkbox
let inputele = document.createElement("input");
inputele.type = "checkbox";
inputele.id = checkboxId;
inputele.onclick = function () {
    onTodoStatusChange(checkboxId, labelId);
}
inputele.classList.add("checkbox-ele");
todoele.appendChild(inputele);

// Create label container
let labelcontainer = document.createElement("div");
labelcontainer.classList.add("label-container", 'd-flex', 'flex-row');
todoele.appendChild(labelcontainer);

// Create label
let labelele = document.createElement("label");
labelele.setAttribute("for", checkboxId);
labelele.id = labelId;
labelele.classList.add("label-ele");
labelele.textContent = todo.text;
labelcontainer.appendChild(labelele);

// Create delete button
let deletecontainer = document.createElement("div");
deletecontainer.classList.add("delete-container");
labelcontainer.appendChild(deletecontainer);

let deleteele = document.createElement("i");
deleteele.classList.add("bi", "bi-trash3", "delete-ele");
deleteele.onclick = function () {
    onDeleteStatusChange(todoId);
}
deletecontainer.appendChild(deleteele);

// Append the complete todo item to the container
itemcontainer.appendChild(todoele);
}

for(let item of todo){
    todoList(item);
}
let todocount = todo.length;

function onAddTodo(){

    let userInputElement = document.getElementById("inputele");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Please enter a todo item.");
        return;
    }
    todocount += 1;
    let newTodo = { text: userInputValue, uno: todocount };
    todo.push(newTodo); // Add to the todo array
    todoList(newTodo);
    userInputElement.value = "";
}
addTodoButton.onclick=function(){
    onAddTodo();
}


