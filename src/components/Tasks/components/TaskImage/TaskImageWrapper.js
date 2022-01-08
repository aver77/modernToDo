import React from 'react';
import styled from 'styled-components';
import TaskImage from './TaskImage';

import likeImg from '../../../../images/like.png';
import solveImg from '../../../../images/solve.png';
import deleteImg from '../../../../images/delete.png';

import likedImg from '../../../../images/liked.png';
import solvedImg from '../../../../images/solved.png';

const TaskImgWrapper = styled.div`
    padding: 22px 32px 22px 6px;
    @media screen and (max-width: 576px) {
        & {
            padding: 22px 22px 22px 6px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            padding: 22px 12px 22px 4px;
        }
    }
`;

const TaskImageWrapper = ({liked, solved, id, name}) => {
    return (
        <TaskImgWrapper>
            <TaskImage imgLink={liked?likedImg:likeImg} imgAlt='like' title='Like task' liked={liked} id={id} name={name}/>
            <TaskImage imgLink={solved?solvedImg:solveImg} imgAlt='solve' title='Solve task' solved={solved} id={id} name={name}/>
            <TaskImage imgLink={deleteImg} imgAlt='delete' title='Delete task' id={id} name={name}/>
        </TaskImgWrapper>
    );
};

export default React.memo(TaskImageWrapper);