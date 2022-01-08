import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BurgerText = styled.li`
    cursor: pointer;
    font-size:48px;
    margin-top:64px;
    color: black;
    transition: 0.2s linear;
    &:focus,&:hover,&:active {
        .burgerElemText::after {
            width: 100%
        }
    }
    @media screen and (max-width: 768px), screen and (max-height: 768px) {
        & {
            font-size: 38px;
        }
    }
    @media screen and (max-width: 428px), screen and (max-height: 428px) {
        & {
            font-size: 26px;
            margin-top: 40px;
        }
    }
`;
const BurgerElemText = styled.p`
    position: relative;
    &::after {
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 4px;
        background-color: black;
        content: "";
        transition: width 0.3s ease-out;
    }
    @media screen and (max-width: 428px), screen and (max-height: 428px) {
        &::after {
            height: 2px;
        }
    }
`;

const BurgerLink = ({path, text}) => {
    return (
        <BurgerText>
            <Link to={path}>
                <BurgerElemText className="burgerElemText">{text}</BurgerElemText>
            </Link>
        </BurgerText>
    );
};

export default React.memo(BurgerLink);