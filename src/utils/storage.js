class Storage {
    setTasksArray(tasksName, tasks) {
        localStorage.setItem(tasksName, JSON.stringify(tasks));
    }
    getTasksArray(tasksName) {
        return JSON.parse(localStorage.getItem(tasksName));
    }
    clearTasksArray(tasksName) {
        localStorage.setItem(tasksName, JSON.stringify([]));
    }
}
export default Storage;