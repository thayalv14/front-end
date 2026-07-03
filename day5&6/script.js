const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "removeBtn";

    removeBtn.addEventListener("click", function () {
        li.remove();
        alert("Task Removed Successfully!");
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);

    alert("Task Added Successfully!");

    taskInput.value = "";
    taskInput.focus();
});

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});