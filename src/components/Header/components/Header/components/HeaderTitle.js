import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderTitleElem = styled.p`
    cursor: pointer;
    padding-top: 7px;
    font-family: 'Birthstone';
    font-weight: 400;
    font-size:44px;
    color: black;
`;

const HeaderTitle = ({title}) => {
    return (
        <Link to={'/'}>
            <HeaderTitleElem>{title}</HeaderTitleElem>
        </Link>
    );
};

export default React.memo(HeaderTitle);