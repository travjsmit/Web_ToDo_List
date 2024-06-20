document.getElementById("add-task-btn").addEventListener("click", function () {
  var taskList = document.getElementById("task-list");
  var taskInput = document.getElementById("new-task-input");
  if (taskInput.value.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = function () {
      taskList.removeChild(newTask);
    };
    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});
