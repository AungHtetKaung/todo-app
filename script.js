function addTask() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("taskTime");
  
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.innerHTML = `<strong>${taskText}</strong> ${taskTime ? ' - ' + taskTime : ''}`;
    li.appendChild(span);
  
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => li.remove();
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
    timeInput.value = "";
  }
  