/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState , useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import MainInput from './MainInput';
import MainInputAdd from './MainInputAdd';
import MainInputRemove from './MainInputRemove';

import { addTask } from '../../../../redux/tasksSlice';
import { useDispatch } from 'react-redux';

const MainInputSectionElem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:24px;
    width: 800px;
    @media screen and (max-width: 1402px) {
        & {
            text-align: center;
            width: 1200px;
        }
    }
`;
const MainInputWrapper = styled.div`
    width: 100%;
`;

const MainInputSection = () => {  

    const [newTask, setNewTask] = useState(null);
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const inputAddRef = useMemo(() => inputRef, [inputRef]);

    const clearForm = useCallback(() => {
        inputAddRef.current.value = '';
    },[inputAddRef])

    const inputRefHandler = () => {
        let result;
        !inputAddRef? result = '' : result = inputAddRef.current.value;
        return result;
    }

    const addDataHandler = (newValue) => {
        if (newValue) {
            setNewTask(newValue);
            const createdTask = [{
                taskText: newValue,
                liked: false,
                solved: false,
                id: uuidv4()
            }];
            dispatch(addTask(createdTask));
        }
    }

    const inputAddRefHandler = useCallback(() => {
        addDataHandler(inputRefHandler());
        clearForm();
    },[newTask])

    return (
        <MainInputSectionElem>
            <MainInputWrapper>
                <MainInput inputAddRefHandler={inputAddRefHandler} inputAddRef={inputAddRef}/>
                <MainInputAdd inputAddRefHandler={inputAddRefHandler} inputAddRef={inputAddRef}/>
                <MainInputRemove 
                    clearForm={clearForm} 
                />
            </MainInputWrapper>
        </MainInputSectionElem>
    );
};

export default React.memo(MainInputSection);














// {/* <MainInput 
//     ref = {inputAddRef}
//     autoComplete="off" 
//     type="text" 
//     placeholder="Add a task..."
//     onKeyDown = {
//         keyPressAddHandler
//     }
// />
// <MainInputAdd 
//     title="Add task" 
//     src={add} 
//     alt="add"
//     onClick = {() => {
//         inputAddRefHandler(inputAddRef);
//     }}
// />
// <MainInputRemove
//     title="Remove all tasks"
//     src={remove}
//     alt="remove all"
//     onClick = {() => {
//         removeAllTasks();
//     }}
// /> */}