import React from 'react';
import styled from 'styled-components';
import add from '../../../../images/add.png';

const MainInputAddElem = styled.img`
    width: 38px;
    height: 38px;
    transition: 0.3s ease;
    &:focus,&:hover,&:active {
        opacity: 0.5;
    }
    @media screen and (max-width: 793px) {
        & {
            width: 26px;
            height: 26px;
        }
    }
`;

const MainInputAdd = ({inputAddRefHandler}) => {

    return (
        <MainInputAddElem 
            title="Add task" 
            src={add} 
            alt="add"
            onClick = {inputAddRefHandler}
        />
    );
};

export default MainInputAdd;