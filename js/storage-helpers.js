function saveTasks(allTasks) {
    const tasksJson = JSON.stringify(allTasks);
    localStorage.setItem("tasks", tasksJson);
}

function getTasks() {
    const tasks = localStorage.getItem("tasks") || "[]";
    return JSON.parse(tasks);
}

export {saveTasks, getTasks}