import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTasks: [],
    removedTasks: [],
    pageNumber: null
}

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask(state, action) {
            state.allTasks = [...state.allTasks,...action.payload]
        },
        removeTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);

            const removed = state.allTasks.splice(taskIndex, 1);
            state.removedTasks.push(...removed);
            state.pageNumber = null;
        },
        likeTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].liked = true;
            state.pageNumber = null;
        },
        unLikeTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].liked = false;
            state.pageNumber = null;
        },
        solveTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].solved = true;
            state.pageNumber = null;
        },
        unSolveTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].solved = false;
            state.pageNumber = null;
        },
        findTask(state, action) {
            state.pageNumber = Math.ceil((action.payload + 1) / 4);
        },
        removeAllTasks(state) {
            state.removedTasks = state.allTasks;
            state.allTasks = [];
            state.pageNumber = null;
        },
        removeAllSolvedTasks(state) {
            state.allTasks.map(item => item.solved = false);
            state.pageNumber = null;
        },
        removeRemovedTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.removedTasks.findIndex(item => item.id === idx);

            state.removedTasks.splice(taskIndex, 1);
            state.pageNumber = null;
        },
        removeAllRemovedTasks(state) {
            state.removedTasks = [];
            state.pageNumber = null;
        },
        removeAllLikedTasks(state) {
            state.allTasks.map(item => item.liked = false);
            state.pageNumber = null;
        }
    }

})

export default tasksSlice.reducer;
export const {addTask, removeTask, likeTask, unLikeTask, solveTask, unSolveTask, findTask, removeAllTasks, removeRemovedTask, removeAllRemovedTasks, removeAllSolvedTasks, removeAllLikedTasks} = tasksSlice.actions;