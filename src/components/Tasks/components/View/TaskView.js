import React from 'react';
import styled from 'styled-components';

import TaskImageWrapper from '../TaskImage/TaskImageWrapper';

const TaskNumber = styled.p`
    font-size: 20px;
    padding: 22px 6px 22px 32px;
    font-weight: 500;
    @media screen and (max-width: 576px) {
        & {
            padding: 22px 6px 22px 22px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            font-size: 18px;
            padding: 24px 6px 24px 12px;
        }
    }
    @media screen and (max-width: 337px) {
        & {
            font-size: 16px;
            padding: 25px 4px 24px 12px;
        }
    }
`;
const TaskText = styled.p`
    font-size: 20px;
    padding-top: 22px;
    overflow: hidden;
    @media screen and (max-width: 576px) {
        & {
            padding-top: 24px;
            font-size: 18px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            padding-top: 26px;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 337px) {
        & {
            font-size: 14px;
        }
    }
`;

const TaskView = ({task, number, name}) => {
    const {liked, solved, id, taskText} = task;
    return (
        <>
            <TaskNumber>{++number}.</TaskNumber>
            <TaskText>{taskText}</TaskText>
            <TaskImageWrapper 
                id = {id}
                liked = {liked}
                solved = {solved}
                name = {name}
            />
        </>
    );
}

export default React.memo(TaskView);