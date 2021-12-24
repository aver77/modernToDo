import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import close from '../../images/close.png'

const BurgerElement = styled.div`
    position: fixed;
    background:#EE6E73;
    top:0;
    right: 0;
    z-index: 999;
    height: 100vh;
    width: 50vw;
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.4);
`;
const BurgerWrapper = styled.div`
    position: relative;
    width:100%;
    height: 100%;
`;
const BurgerNav = styled.nav`
    padding-top: 200px;
    @media screen and (max-width: 768px), screen and (max-height: 768px) {
        & {
            padding-top: 100px;
        }
    }
    @media screen and (max-width: 428px), screen and (max-height: 428px) {
        & {
            padding-top: 74px;
        }
    }
`;
const BurgerUl = styled.ul`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
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
const BurgerImgWrapper = styled.div`
    position: absolute;
    top: 12px;
    right: 20%;
`;
const BurgerCloseImg = styled.img`
    height: 34px;
    width: 34px;
`;

const Burger = ({burgerHandler}) => {
    return (
    <BurgerElement>
        <BurgerWrapper>
            <BurgerImgWrapper>
                <BurgerCloseImg 
                    src={close} 
                    alt="close"
                    onClick={() => burgerHandler(false)}
                />
            </BurgerImgWrapper>         
            <BurgerNav>
                <BurgerUl>
                    <BurgerText>
                        <Link to={'/liked'}>
                            <BurgerElemText className="burgerElemText">Liked</BurgerElemText>
                        </Link>
                    </BurgerText>
                    <BurgerText>
                        <Link to={'/solved'}>
                            <BurgerElemText className="burgerElemText">Solved</BurgerElemText>
                        </Link>
                    </BurgerText>
                    <BurgerText>
                        <Link to={'/deleted'}>
                            <BurgerElemText className="burgerElemText">Deleted</BurgerElemText>
                        </Link>
                    </BurgerText>
                </BurgerUl>
            </BurgerNav>
        </BurgerWrapper>
    </BurgerElement>
    );
};

export default Burger;