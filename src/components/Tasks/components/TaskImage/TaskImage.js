import React from 'react';
import styled from 'styled-components';

import { likeTask, solveTask, removeTask, unSolveTask, unLikeTask, removeRemovedTask } from '../../../../redux/tasksSlice';
import { useDispatch } from 'react-redux';

const TaskImg = styled.img`
    transition: .3s ease;
    height: 24px;
    width: 24px;
    padding-left: 34px;
    cursor: ${props => props.cursorStyle === 'deleted' && props.alt!=='delete' ? "not-allowed" :"pointer"};
    &:focus,&:hover,&:active {
        opacity: 0.6;
    }
    @media screen and (max-width: 1024px),
    screen and (max-height: 1024px) {
        &:focus,&:hover,&:active {
            opacity: 1;
        }
    }
    @media screen and (max-width: 576px) {
        & {
            padding-left: 12px;
            height: 20px;
            width: 20px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            height: 18px;
            width: 18px;
            padding-left: 6px;
        }
    }
`;

const TaskImage = ({imgLink, imgAlt, imgTitle, id, solved, liked, name, openModalDeleteSingleHandler}) => {
    const dispatch = useDispatch();

    const dispatchTasksHandler = () => {
        if (imgAlt === "solve") {
            if (name !== "deleted") {
                solved? dispatch(unSolveTask(id)): dispatch(solveTask(id));
            }
        }
        if (imgAlt === "like") {
            if (name !== "deleted") {
                liked? dispatch(unLikeTask(id)): dispatch(likeTask(id)); 
            } 
        }
        if (imgAlt === "delete") {
            if (name === "deleted") {
                dispatch(removeRemovedTask(id))
            }
            else {
                openModalDeleteSingleHandler(true);
                dispatch(removeTask(id));
            }
        }
    }

    return (
        <>
            <TaskImg
                cursorStyle = {name}
                src={imgLink}
                alt={imgAlt}
                title={imgTitle}
                onClick={dispatchTasksHandler}                 
            />
        </>
    );
};
export default React.memo(TaskImage);