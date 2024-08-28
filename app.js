document.getElementById("add-todo").addEventListener("click", addTodo);
let todoInput = document.getElementById("todo-input").value.trim();
document.getElementById("todo-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  let textfield = document.getElementById("todo-input");
  let todoInput = textfield.value.trim();
  if (todoInput != "") {
    const todoList = document.getElementById("todo-list");

    const li = document.createElement("li");
    li.textContent = todoInput;
    console.log(todoInput);
    todoList.appendChild(li);

    // Add delete button to list
    const delButton = document.createElement("button");

    delButton.textContent = "Delete";
    delButton.className = "delete-btn";
    delButton.addEventListener("click", deleteTodo);
    li.appendChild(delButton);

    li.addEventListener("click", toogleComplete);

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-indexed (0-11), so add 1
    const day = now.getDate();
    const span = document.createElement("span");

    const date = ` ${year}-${month}-${day}`;
    span.textContent = date;
    li.appendChild(span);
    textfield.value = "";
  }
}

function deleteTodo() {
  this.parentElement.remove();
}
function toogleComplete() {
  this.classList.add("completed");
}
