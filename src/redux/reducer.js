const initialState = {
    allTasks: [],
    removedTasks: [],
    pageNumber: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                // allTasks: [...state.allTasks,...action.newTask],
                pageNumber: null
            }
        }

        case 'REMOVE_TASK': {
            const idx = action.payload;
            const taskIndex = state.allTasks.find(item => item.id === idx);
            return {
                ...state,
                allTasks: [...state.allTasks.slice(0, taskIndex), ...state.allTasks.slice(taskIndex + 1)],
                removedTasks: [...state.removedTasks, ...state.allTasks[taskIndex]],
                pageNumber: null
            }
        }

        case 'LIKE_TASK': {
            const idx = action.payload;
            const taskIndex = state.allTasks.find(item => item.id === idx);
            state.allTasks[taskIndex].liked = true;
            return {
                ...state
            }
        }

        case 'SOLVE_TASK': {
            const idx = action.payload;
            const taskIndex = state.allTasks.find(item => item.id === idx);
            state.allTasks[taskIndex].solved = true;
            return {
                ...state,
                pageNumber: null
            }
        }

        case 'FIND_TASK': {
            const idx = action.payload;
            const taskIndex = state.allTasks.find(item => item.id === idx);
            return {
                ...state,
                pageNumber: taskIndex
            }
        }

        case 'REMOVE_ALL_TASKS': {
            return {
                ...state,
                removedTasks: [...state.allTasks],
                allTasks: [],
                pageNumber: null
            }
        }

        case 'REMOVE_ALL_REMOVED_TASKS': {
            return {
                ...state,
                removedTasks: [],
                pageNumber: null
            }
        }

        default: {
            return {
                state
            }
        }
    }
}

export default reducer;