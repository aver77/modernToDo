import React, { useMemo } from 'react';
import styled from 'styled-components';

import TasksItem from '../components/Tasks/TasksItem';
import { useSelector } from 'react-redux';

const TasksPageWrapper = styled.div`
    padding-top: 112px;
    @media screen and (max-width: 793px) {
        padding-top: 176px;
    }
`;

const LikedPage = () => {
    const tasksForAll = useSelector(state => state.tasksSlice.allTasks);
    const allTasks = useMemo(() => tasksForAll, [tasksForAll]);

    const likedTasks = useMemo(() => {
        let tasksForLike = [];
        if (allTasks) {
            allTasks.forEach(item => {
                if (item.liked === true) {
                    tasksForLike.push(item);
                }
            })
        }
        return tasksForLike;
    },[allTasks])

    return (
        <TasksPageWrapper className="__container">
            <TasksItem name="liked" tasks={likedTasks}/>
        </TasksPageWrapper>
    );
};
export default React.memo(LikedPage);