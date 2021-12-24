const addTask = (newTask) => {
    // console.log(newTask);
    return {
        type: 'ADD_TASK',
        payload: newTask
    }
}

const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        payload: id
    }
}

const likeTask = (id) => {
    return {
        type: 'LIKE_TASK',
        payload: id
    }
}

const solveTask = (id) => {
    return {
        type: 'SOLVE_TASK',
        payload: id
    }
}

const findTask = (id) => {
    return {
        type: 'FIND_TASK',
        payload: id
    }
}

const removeAllTasks = () => {
    return {
        type: 'REMOVE_ALL_TASKS'
    }
}

const removeAllRemovedTasks = () => {
    return {
        type: 'REMOVE_ALL_REMOVED_TASKS'
    }
}

export {
    addTask,
    removeTask,
    likeTask,
    findTask,
    solveTask,
    removeAllTasks,
    removeAllRemovedTasks
}