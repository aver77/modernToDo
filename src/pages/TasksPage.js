import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TasksItem from '../components/Tasks/TasksItem';

const TasksPageWrapper = styled.div`
    padding-top: 48px;
`;

const TasksPage = () => {
    const tasksForAll = useSelector(state => state.tasksSlice.allTasks);
    const allTasks = useMemo(() => tasksForAll, [tasksForAll]);

    return (
        <TasksPageWrapper className="__container">
            <TasksItem name="allTasks" tasks={allTasks}/>
        </TasksPageWrapper>
    );
};

export default TasksPage;