import React from 'react';
import styled from 'styled-components';
import TaskImage from './TaskImage';

import likeImg from '../../../../images/like.png';
import solveImg from '../../../../images/solve.png';
import deleteImg from '../../../../images/delete.png';

import likedImg from '../../../../images/liked.png';
import solvedImg from '../../../../images/solved.png';

const TaskImgWrapper = styled.div`
    min-width: 200px;
    padding: 22px 32px 22px 6px;
    @media screen and (max-width: 576px) {
        & {
            min-width: 100px;
            padding: 22px 22px 22px 6px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            min-width: 80px;
            padding: 22px 12px 22px 4px;
        }
    }
`;

const TaskImageWrapper = ({liked, solved, id, name, openModalDeleteSingleHandler}) => {
    return (
        <TaskImgWrapper>
            <TaskImage 
                imgLink={liked?likedImg:likeImg} 
                imgAlt='like' 
                imgTitle='Like task' 
                liked={liked} 
                id={id} 
                name={name}
            />
            <TaskImage 
                imgLink={solved?solvedImg:solveImg} 
                imgAlt='solve' 
                imgTitle='Solve task' 
                solved={solved} 
                id={id} 
                name={name}
            />
            <TaskImage 
                imgLink={deleteImg} 
                imgAlt='delete' 
                imgTitle='Delete task' 
                id={id} 
                name={name}
                openModalDeleteSingleHandler={openModalDeleteSingleHandler}
            />
        </TaskImgWrapper>
    );
};
export default React.memo(TaskImageWrapper);