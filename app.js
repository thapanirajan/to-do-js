// Add event listener to the "Add" button to trigger the addTodo function when clicked
document.getElementById("add-todo").addEventListener("click", addTodo);

// Add event listener to the input field to trigger addTodo when the Enter key is pressed
document.getElementById("todo-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Function to add a new to-do item to the list
function addTodo() {
  // Get the trimmed value from the input field
  let textfield = document.getElementById("todo-input");
  let todoInput = textfield.value.trim();

  // If the input is not empty, proceed to add the task
  if (todoInput != "") {
    const todoList = document.getElementById("todo-list");

    // Create a new list item (li) element and set its text content to the input value
    const li = document.createElement("li");
    li.textContent = todoInput;
    console.log(todoInput);
    todoList.appendChild(li);

    // Get the current date and format it as YYYY-MM-DD
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-indexed (0-11), so add 1
    const day = now.getDate();
    const span = document.createElement("span");

    // Set the text content of the span to the formatted date and append it to the list item
    const date = ` ${year}-${month}-${day}`;
    span.textContent = date;
    li.appendChild(span);

    // Create and append a "Delete" button to the list item
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.className = "delete-btn";
    delButton.addEventListener("click", deleteTodo);
    li.appendChild(delButton);

    // Add an event listener to the list item to toggle the completed state when clicked
    li.addEventListener("click", toogleComplete);

    // Clear the input field after adding the task
    textfield.value = "";
  }
}

// Function to delete a to-do item from the list
function deleteTodo() {
  this.parentElement.remove();
}

// Function to mark a to-do item as completed by adding a class
function toogleComplete() {
  this.classList.add("completed");
}
