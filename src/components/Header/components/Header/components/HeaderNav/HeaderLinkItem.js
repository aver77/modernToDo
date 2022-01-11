import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderText = styled.li`
    cursor: pointer;
    font-size:22px;
    padding:0 20px;
    color: black;
    transition: 0.2s linear;
    &:focus,&:hover,&:active {
        .headerElemText::after {
            width: 100%
        }
    }
`;
const HeaderElemText = styled.p`
    position: relative;
    &::after {
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        background-color: black;
        content: "";
        transition: width 0.3s ease-out;
    }
`;

const HeaderLinkItem = ({linkPath, linkText}) => {
    return (
        <HeaderText>
            <Link to={linkPath}>
                <HeaderElemText className="headerElemText">{linkText}</HeaderElemText>
            </Link>
        </HeaderText>
    );
};
export default React.memo(HeaderLinkItem);