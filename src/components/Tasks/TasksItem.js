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
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

    //working with btns methods
    const handlePrevPageBtn = useCallback(() => {
        if (currentPage === 1) setCurrentPage(pagesAmount);
        else setCurrentPage(currentPage - 1);

        console.log('MIN: MAX и MIN до изменения', maxPageNumberLimit,minPageNumberLimit)
        if ((currentPage - 1) % tasksPerPage === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - tasksPerPage);
            setMinPageNumberLimit(minPageNumberLimit - tasksPerPage);
            console.log('MIN: MAX и MIN после изменения', minPageNumberLimit, minPageNumberLimit)
        }
    },[currentPage, maxPageNumberLimit, minPageNumberLimit, pagesAmount, tasksPerPage]);

    const handleNextPageBtn = useCallback(() => {
        if (currentPage === pagesAmount) setCurrentPage(1);
        else setCurrentPage(currentPage + 1);

        console.log('MAX: MAX и MIN до изменения', maxPageNumberLimit,minPageNumberLimit)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + tasksPerPage);
            setMinPageNumberLimit(minPageNumberLimit + tasksPerPage);
            console.log('MAX: MAX и MIN после изменения', maxPageNumberLimit, minPageNumberLimit);
        }
    },[currentPage, maxPageNumberLimit, minPageNumberLimit, pagesAmount, tasksPerPage]);

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