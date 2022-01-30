import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { removeAllRemovedTasks, removeAllSolvedTasks, removeAllLikedTasks } from '../../../redux/tasksSlice';

import removeAll from '../../../images/removeAll.png';

const ClearImg = styled.img`
    height: 36px;
    width: 36px;
    padding: 5px;
    cursor: pointer;
    &:focus,&:hover,&:active {
        opacity: 0.6;
    };
    @media screen and (max-width: 1024px),
    screen and (max-height: 1024px) {
        &:focus,&:hover,&:active {
            opacity: 1;
        }
    }
`;

const TasksClear = ({name}) => {
    const dispatch = useDispatch();

    if (name !== 'allTasks') {
        return (
            <ClearImg 
                src={removeAll} 
                alt="remove all"
                onClick={() => {
                    if (name === "liked") {
                        dispatch(removeAllLikedTasks())
                    }
                    if (name === "solved") {
                        dispatch(removeAllSolvedTasks())
                    }
                    if (name === "deleted") {
                        dispatch(removeAllRemovedTasks());
                    }
                }}
            />
        );
    }
    return <></>
};
export default React.memo(TasksClear);