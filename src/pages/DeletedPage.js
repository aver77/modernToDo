import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TasksItem from '../components/Tasks/TasksItem';

const TasksPageWrapper = styled.div`
    padding-top: 112px;
    @media screen and (max-width: 793px) {
        padding-top: 176px;
    }
`;

const DeletedPage = () => {
    const tasksForRemove = useSelector(state => state.tasksSlice.removedTasks);
    const removedTasks = useMemo(() => tasksForRemove, [tasksForRemove]);

    return (
        <TasksPageWrapper className="__container">
            <TasksItem name="deleted" tasks={removedTasks.length?removedTasks:[]}/>
        </TasksPageWrapper>
    );
};

export default DeletedPage;