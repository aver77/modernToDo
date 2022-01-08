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

const TasksPaginate = ({pagesAmount, prevHandler, nextHandler, children}) => {

    if (pagesAmount >= 2) {
        return (
            <TaskPageImgWrapper>
                <TaskImgPaginate imgLink={prevPic} imgAlt="prev" pageHandler={prevHandler}/> 
                    {/* компонент pagination с пропсами */}
                    {children}
                <TaskImgPaginate imgLink={nextPic} imgAlt="next" pageHandler={nextHandler}/>
            </TaskPageImgWrapper>
        );
    }
    return <></>
};

export default React.memo(TasksPaginate);