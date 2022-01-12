import React from 'react';
import styled from 'styled-components';

const TaskPageImg = styled.img`
    height: 36px;
    width: 36px;
    padding: 0 4px 0 4px;
    cursor: pointer;
    &:focus,&:hover,&:active {
        opacity: 0.6;
    }
`

const TaskImgPaginate = ({imgLink, imgAlt, pageHandler}) => {
    return (
        <TaskPageImg 
            src={imgLink} 
            alt={imgAlt}
            onClick={pageHandler}
        />
    );
};
export default React.memo(TaskImgPaginate);