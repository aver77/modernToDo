import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TasksItem from '../components/Tasks/TasksItem';

const TasksPageWrapper = styled.div`
    padding-top: 112px;
    @media screen and (max-width: 793px) {
        padding-top: 176px;
    }
`;

const SolvedPage = () => {
    const tasksForAll = useSelector(state => state.tasksSlice.allTasks);
    const allTasks = useMemo(() => tasksForAll, [tasksForAll]);

    const solvedTasks = useMemo(() => {
        let tasksForSolve = [];
        if (allTasks) {
            allTasks.forEach(item => {
                if (item.solved === true) {
                    tasksForSolve.push(item);
                }
            })
        }
        return tasksForSolve;
    },[allTasks])

    return (
        <TasksPageWrapper className="__container">
            <TasksItem name="solved" tasks={solvedTasks}/>
        </TasksPageWrapper>
    );
};

export default SolvedPage;