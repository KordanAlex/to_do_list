
import { saveTasks, getTasks } from "./storage-helpers.js";
import { createTaskItem } from "./task-item.js";
import { createAppLayout } from "./layout.js";



function runToDoApp() {
    const ui = createAppLayout(); 
    document.body.append(ui.mainLayout);

    let allTasks = getTasks();
    updateTodoList();

    function addTask() {
        const todoText = ui.taskFieldInput.value.trim();
        if (todoText.length > 0) {
            const newTask = {
                text: todoText,
                isDone: false,
            };
            allTasks.push(newTask);
            updateTodoList();
            saveTasks(allTasks);
            ui.taskFieldInput.value = "";
            ui.taskFieldInput.focus();
        }
    }

    function updateTodoList() {
        ui.todoList.innerHTML = "";
        allTasks.forEach((taskObj) => {
            const taskView = createTaskItem(taskObj);

            taskView.checkbox.addEventListener("change", () => {
                taskObj.isDone = taskView.checkbox.checked;
                saveTasks(allTasks);
                updateTodoList();
            });

            taskView.deleteBtn.addEventListener("click", () => {
                allTasks = allTasks.filter((t) => t !== taskObj);
                saveTasks(allTasks);
                updateTodoList();
            });

            ui.todoList.append(taskView.element);
        });
        updateCounter();
    }

    function updateCounter() {
        const total = allTasks.length;
        const completed = allTasks.filter((t) => t.isDone).length;

        ui.totalTaskValue.textContent =
            total > 0 ? `${completed} / ${total}` : "0";
    }

    ui.todoTaskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addTask();
    });
}
runToDoApp();