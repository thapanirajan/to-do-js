
# To-Do List Application

This is a simple JavaScript-based to-do list application that allows users to add, delete, and mark tasks as completed. The application also logs the date when each task was added.


## Features

- Add a Task: Users can add a new task by entering text into the input field and either pressing the "Add" button or hitting the Enter key.
- Delete a Task: Each task has a "Delete" button that allows the user to remove the task from the list.
- Mark a Task as Completed: Clicking on a task will mark it as completed by applying a CSS class.
- Display Date: The date on which the task was added is displayed next to the task.


## Usage
### Adding a task

- Type your task in the input field.
- Press the "Add" button or hit the Enter key to add the task to the list.
- The task will appear in the list with a "Delete" button and the current date.

### Deleting a task

- Click the "Delete" button next to a task to remove it from the list.

### Marking a Task as Completed
- Click on the task text to mark it as completed. The task will have the class completed added to it, which you can style with CSS.

#### Status: incomplete


## Future Enhancements

### Persistent Storage

- Local Storage: Save the tasks in the browser's local storage so that the list persists even after the page is refreshed or the browser is closed.

- Backend Integration: Implement a backend using Node.js and a database (like MongoDB) to store tasks on a server, allowing users to access their to-do list from any device.

### Task Editing
- Edit Task Text: Allow users to edit the text of an existing task by clicking on it or an "Edit" button. The task would switch to an editable text field, and the user could save changes. 
- Update Completion Date: If a task is marked as incomplete and then completed again, update the completion date to reflect the latest action.

