import React from 'react';
import styled from 'styled-components';
import TaskImgPaginate from './TaskImgPaginate';

import nextPic from '../../../../images/next.png';
import prevPic from '../../../../images/prev.png';

const TaskPageImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;
const Dots = styled.li`
    padding: 0 2px 0 2px;
    padding-top: 10px;
    list-style: none;
    font-size: 24px;
`;

const TasksPaginate = ({pagesAmount, minPageNumberLimit, maxPageNumberLimit, handlePrevPageBtn, handleNextPageBtn, children}) => {
    //dots
    let pageDecrementBtn = null;
    if (minPageNumberLimit > 1) {
        pageDecrementBtn = <Dots onClick={handlePrevPageBtn}>•••</Dots>
    }
    let pageIncrementBtn = null;
    if (pagesAmount > maxPageNumberLimit) {
        pageIncrementBtn = <Dots onClick={handleNextPageBtn}>•••</Dots>
    }

    if (pagesAmount >= 2) {
        return (
            <TaskPageImgWrapper>
                <TaskImgPaginate imgLink={prevPic} imgAlt="prev" pageHandler={handlePrevPageBtn}/> 
                    {pageDecrementBtn}
                    {children}
                    {pageIncrementBtn}
                <TaskImgPaginate imgLink={nextPic} imgAlt="next" pageHandler={handleNextPageBtn}/>
            </TaskPageImgWrapper>
        );
    }
    return <></>
};

export default React.memo(TasksPaginate);