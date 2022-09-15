const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");
let toDoList = [];

if (localStorage.getItem("todo")) {
  toDoList = JSON.parse(localStorage.getItem("todo"));
  displayTodoList();
}

addButton.addEventListener("click", onClickAdd);

function onClickAdd() {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };
  toDoList.push(newTodo);
  resetValue();
  displayTodoList();
  setParamsInLocal(toDoList);
}

function displayTodoList() {
  let displayMessage = "";
  toDoList.forEach((item, i) => {
    displayMessage += `
    <li>
        <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
        <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
    console.log(displayMessage);
  });
}

function resetValue() {
  addMessage.value = "";
}

function setParamsInLocal(date) {
  localStorage.setItem("todo", JSON.stringify(date));
}
