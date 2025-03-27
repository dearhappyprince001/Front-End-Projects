//This function is triggered when the user adds a task.

function addTask() {
  let taskInput = document.getElementById("taskInput");

  let taskText = taskInput.value.trim(); //taskText.trim() removes extra spaces at the start and end.

  if (taskText === "") return; //is a guard clause that prevents empty tasks from being added to the to-do list.

  // Prevent duplicate tasks

  //This converts the taskList.children (a live HTMLCollection of <li> elements) into an array so we can use array methods like .some().
  //.some((li) => li.firstChild.textContent.trim() === taskText)Iterates through each <li> element in the taskList.Checks if the text content of the first child (likely a <span> or text node) matches taskText (the new task being added).

  if (
    [...taskList.children].some(
      (li) => li.firstChild.textContent.trim() === taskText
    )
  ) {
    alert("Task already exists!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="toggleComplete(this)">✔</button> <button onclick="removeTask(this)">❌</button>`;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = ""; //This finds the <ul> (unordered list) element with id="taskList".
  //It appends the newly created <li> (task item) to the list.
  //It appends the newly created <li> (task item) to the list.
}

//This function is called when the ✔ button is clicked.
function toggleComplete(button) {
  let li = button.parentElement;
  li.classList.toggle("completed");
}

//This function is called when the ❌ button is clicked.
function removeTask(button) {
  if (confirm("Are you sure you want to delete this task?")) {
    let li = button.parentElement;
    li.remove(); //It removes that <li> from the DOM.
  }
}
