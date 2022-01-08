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

const TasksItem = ({tasks, name }) => {
    const taskFoundedIndex = useSelector(state => state.tasksSlice.pageNumber);

    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(4);
    const pagesAmount = Math.ceil(tasks?(tasks.length / tasksPerPage):null);

    const lastTaskIndex  = currentPage * tasksPerPage;
    const firstTaskIndex = lastTaskIndex - tasksPerPage;
    const currentTask = useMemo(() => {
        return tasks?(tasks.slice(firstTaskIndex, lastTaskIndex)) : [];
    },[firstTaskIndex, lastTaskIndex, tasks]);

    //автоматически при поиске эл-та установит страницу => paginateHandler - чтоб при поиске элемента получали в него номер страницы НЕ НУЖЕН!
    useEffect(() => {
        if (taskFoundedIndex) {
            setCurrentPage(Math.ceil(taskFoundedIndex / tasksPerPage));
        }
    },[taskFoundedIndex, tasksPerPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = useCallback(() => {
        setCurrentPage((page) => {
            if (page === tasks.length)
                return 1;
            return page + 1;
        })
    },[tasks.length, setCurrentPage]);

    const prevPage = useCallback(() => {
        setCurrentPage((page) => {
            if (page === 1)
                return 1;
            return tasks.length;
        })
    },[tasks.length, setCurrentPage]);

    if (!tasks.length && name === "allTasks") return <DefaultView/>
    
    if (!tasks.length) return <></>
    // тут возвращаем уже динамическое
    return (
        //передаем не все таски а currentTask
        <>
            <TasksViewPaginate name={name} currentTask={currentTask}/>
        
            <TaskWithPaginateWrap>
                <TasksPaginate pagesAmount={pagesAmount} tasks={tasks} prevHandler={prevPage} nextHandler={nextPage}>
                    <Pagination currentIndex={currentPage} tasksPerPage={tasksPerPage} totalTasks={tasks.length} paginate={paginate}/>
                </TasksPaginate>

                <TasksClear name={name}/>
            </TaskWithPaginateWrap>
        </>
    );
};


export default React.memo(TasksItem);