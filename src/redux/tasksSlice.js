import { createSlice } from "@reduxjs/toolkit";
import Storage from "../utils/storage";
const ST = new Storage();

const initialState = {
    allTasks: ST.getTasksArray('allTasks') || [],
    removedTasks: ST.getTasksArray('removedTasks') || [],
    pageNumber: null
}

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask(state, action) {
            state.allTasks = [...state.allTasks,...action.payload]
            ST.setTasksArray('allTasks', state.allTasks);
        },
        removeTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            const removed = state.allTasks.splice(taskIndex, 1);
            ST.setTasksArray('allTasks', state.allTasks);
            state.removedTasks.push(...removed);
            ST.setTasksArray('removedTasks', state.removedTasks);
            state.pageNumber = null;
        },
        likeTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].liked = true;
            ST.setTasksArray('allTasks', state.allTasks);
            state.pageNumber = null;
        },
        unLikeTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].liked = false;
            ST.setTasksArray('allTasks', state.allTasks);
            state.pageNumber = null;
        },
        solveTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].solved = true;
            ST.setTasksArray('allTasks', state.allTasks);
            state.pageNumber = null;
        },
        unSolveTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.allTasks.findIndex(item => item.id === idx);
            state.allTasks[taskIndex].solved = false;
            ST.setTasksArray('allTasks', state.allTasks);
            state.pageNumber = null;
        },
        findTask(state, action) {
            console.log(action.payload)
            if (action.payload === 0 || action.payload % 4 === 0) {
                state.pageNumber = Math.ceil((action.payload + 1) / 4);
            } else {
                state.pageNumber = Math.ceil((action.payload) / 4);
            }
        },
        removeAllTasks(state) {
            state.removedTasks = state.allTasks;
            ST.setTasksArray('removedTasks', state.allTasks);
            state.allTasks = [];
            ST.clearTasksArray('allTasks');
            state.pageNumber = null;
        },
        removeAllSolvedTasks(state) {
            state.allTasks.map(item => item.solved = false);
            ST.setTasksArray('allTasks', state.allTasks);
            state.pageNumber = null;
        },
        removeRemovedTask(state, action) {
            const idx = action.payload;
            const taskIndex = state.removedTasks.findIndex(item => item.id === idx);
            state.removedTasks.splice(taskIndex, 1);
            ST.setTasksArray('removedTasks', state.removedTasks);
            state.pageNumber = null;
        },
        removeAllRemovedTasks(state) {
            state.removedTasks = [];
            ST.clearTasksArray('removedTasks');
            state.pageNumber = null;
        },
        removeAllLikedTasks(state) {
            state.allTasks.map(item => item.liked = false);
            ST.setTasksArray('allTasks', state.allTasks);
            state.pageNumber = null;
        }
    }
})

export default tasksSlice.reducer;
export const {addTask, removeTask, likeTask, unLikeTask, solveTask, unSolveTask, findTask, removeAllTasks, removeRemovedTask, removeAllRemovedTasks, removeAllSolvedTasks, removeAllLikedTasks} = tasksSlice.actions;