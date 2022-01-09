/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import DefaultView from './components/View/DefaultView/DefaultView';

import Pagination from '../Pagination/Pagination';
import TasksClear from './components/TasksClear';
import TasksPaginate from './components/TasksPaginate/TasksPaginate';
import TasksViewPaginate from './components/TasksPaginate/TasksViewPaginate';

const TaskWithPaginateWrap = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 428px) {
        margin: 10px 0 160px 0;
    }
    @media screen and (max-height: 428px) {
        margin: 10px 0 90px 0;
    }
`

const TasksItem = ({tasks, name}) => {
    const taskFoundedIndex = useSelector(state => state.tasksSlice.pageNumber);
    //for displaying 4 tasks on every single page:
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(4);
    
    const indexOfLastTask = useMemo(() => currentPage * tasksPerPage, [currentPage, tasksPerPage]);
    const indexOfFirstTask = useMemo(() => indexOfLastTask - tasksPerPage, [tasksPerPage, indexOfLastTask]);
    const currentTasks = useMemo(() => tasks?tasks.slice(indexOfFirstTask, indexOfLastTask) : [], [indexOfFirstTask, indexOfLastTask, tasks]);

    //working with dots instead of all btns:
    const pagesAmount = Math.ceil(tasks?(tasks.length / tasksPerPage) : null);
    const [maxPageNumberShown] = useState(3);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

    //working with btns methods
    const handlePrevPageBtn = useCallback(() => {
        if (currentPage === 1) {
            setCurrentPage(pagesAmount);
            setMaxPageNumberLimit(pagesAmount);
            setMinPageNumberLimit(pagesAmount - maxPageNumberShown + 1);
        }
        else {
            setCurrentPage(currentPage - 1);
            if (currentPage - 1 < minPageNumberLimit) {
                setMaxPageNumberLimit(maxPageNumberLimit - maxPageNumberShown);
                setMinPageNumberLimit(minPageNumberLimit - maxPageNumberShown);
            }
        }
    },[currentPage, maxPageNumberLimit, minPageNumberLimit]);

    const handleNextPageBtn = useCallback(() => {
        if (currentPage === pagesAmount) {
            setCurrentPage(1);
            setMaxPageNumberLimit(3);
            setMinPageNumberLimit(1);
        }
        else {
            setCurrentPage(currentPage + 1);
            if (currentPage + 1 > maxPageNumberLimit) {
                setMaxPageNumberLimit(maxPageNumberLimit + maxPageNumberShown);
                setMinPageNumberLimit(minPageNumberLimit + maxPageNumberShown);
            }
        }
    },[currentPage, maxPageNumberLimit, minPageNumberLimit]);

    const handleBtnPageClick = useCallback((e) => {
        setCurrentPage(+e.currentTarget.id);
    },[])

    useEffect(() => {
        if (taskFoundedIndex) {
            setCurrentPage(Math.ceil(taskFoundedIndex / tasksPerPage));
        }
    },[taskFoundedIndex, tasksPerPage]);

    if (!tasks.length && name === "allTasks") return <DefaultView/>
    if (!tasks.length) return <></>
    return (
        <>
            <TasksViewPaginate name={name} currentTasks={currentTasks}/>
        
            <TaskWithPaginateWrap>
                <TasksPaginate pagesAmount={pagesAmount} tasks={tasks} minPageNumberLimit={minPageNumberLimit} maxPageNumberLimit={maxPageNumberLimit} handlePrevPageBtn={handlePrevPageBtn} handleNextPageBtn={handleNextPageBtn}>
                    <Pagination pagesAmount={pagesAmount} currentPage={currentPage} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} handleBtnPageClick={handleBtnPageClick}/>
                </TasksPaginate>

                <TasksClear name={name}/>
            </TaskWithPaginateWrap>
        </>
    );
};

export default React.memo(TasksItem);