import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../windowSize/windowSize';
import { FlexDiv } from '../MainAdd/MainAdd';
import { Link } from 'react-router-dom';

import { findTask } from '../../redux/actions';
import find from '../../images/search.png';
import burgerImg from '../../images/menuIcon.png';
import { connect } from 'react-redux';

const HeaderWrapper = styled.div`
    position: relative;
    background:#EE6E73;
    position: fixed;
    top:0;
    left:0;
    min-width:100%;
    z-index:998;
    height: 64px;
    box-shadow: 0 6px 6px 0px rgba(0, 0, 0, 0.16);

    @media screen and (max-width: 793px) {
        & {
            height: 128px;
        }
    }
`;
const HeaderMenu = styled(FlexDiv)`
`;

const HeaderTitle = styled.p`
    cursor: pointer;
    padding-top: 7px;
    font-family: 'Birthstone';
    font-weight: 400;
    font-size:44px;
    color: black;
`;
const HeaderInput = styled.div`
    margin-left: 58px;
    margin-right: 34px;
    padding-top:14px;
    @media screen and (max-width: 793px) {
        & {
            padding: 0px;
            margin: 0px 10% 24px 0px;
            position: absolute;
            width: 80%;
            bottom: 0;
        }
    }
`;
const HeaderInputElems = styled.div`
    position: relative;
    @media screen and (min-width: 794px) {
        width: 340px;
    }
`;
const HeaderElemInput = styled.input`
    border: 0px;
    border-bottom: 2px solid black;
    width: 300px;
    &[type="text"], textarea {
            background:#EE6E73;
        }
    &::placeholder {
        font-family: 'Montserrat';
        opacity: 0.6;
        color: black;
    }

    @media screen and (max-width: 793px) {
        & {
            width: 88%;
        }
    }
`;

const HeaderElemSearchImg = styled.img`
    position: absolute;
    height: 24px;
    top:0;
    right: 0;
    transition: 0.3s ease;
    &:focus,&:hover,&:active {
        opacity: 0.5;
    }
`;
const HeaderNav = styled.nav``;
const HeaderUl = styled.ul`
    padding-top:14px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;
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

const BurgerWrapper = styled.div`
    margin: 12px 0 0 34px;
`;
const BurgerImg = styled.img`
    height: 34px;
    width: 34px;
`;

const Header = ({burgerHandler,allTasks}) => {
    const {width} = useWindowDimensions();
    const [displayWidth, changeDisplayWidth] = useState(0);
    const [findTask, setFindTask] = useState(null);

    const inputFindRef = useRef(null);

    const inputSubmit = (ref) => {
        ref.current.value = '';
    }
    
    const inputRefHandler = (ref) => {
        let result;
        !ref? result = '' : result = ref.current.value;
        console.log(result);
        return result;
    }
    const inputFindRefHandler = (ref) => {
        setFindTask(inputRefHandler(ref));
        findDataHandler();
        inputSubmit(ref);
    }

    const keyPressFindHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            inputFindRefHandler(inputFindRef);
        }
    }

    const findDataHandler = () => {
        if (findTask) {
            allTasks.forEach(item => {
                const itemText = item.taskText.slice(0, findTask.length);
                if (itemText === findTask) {
                    // тогда нужно открыть страницу с таском (мб вернуть номер страницы в app и оттуда передать его в таскспейдж)
                    // поиск с открытием верной страницы
                    findTask(item.id);
                    item.taskText.style.textDecoration = "underline";
                    item.taskText.style.textDecorationColor = "yellow";
                }
            })
        }
    }

    useEffect(() => {
        changeDisplayWidth({width}.width);
    },[width, displayWidth]);

    return (
        <HeaderWrapper>
            <HeaderMenu className="_container">
                <Link to={'/'}>
                    <HeaderTitle>NW Project</HeaderTitle>
                </Link>
                <HeaderInput>
                    <HeaderInputElems>
                        <HeaderElemInput
                            ref={inputFindRef}
                            type="text"
                            placeholder="Find a task..."
                            onKeyDown = {keyPressFindHandler}
                        />
                        <HeaderElemSearchImg
                            src={find}
                            alt="Find"
                            onClick = {() => inputFindRefHandler(inputFindRef)}
                        />
                    </HeaderInputElems>
                </HeaderInput>
                {
                    displayWidth >= 1135?
                    <HeaderNav>
                        <HeaderUl>
                            <HeaderText>
                                <Link to={'/liked'}>
                                    <HeaderElemText className="headerElemText">Liked</HeaderElemText>
                                </Link>
                            </HeaderText>
                            <HeaderText>
                                <Link to={'/solved'}>
                                    <HeaderElemText className="headerElemText">Solved</HeaderElemText>
                                </Link>
                            </HeaderText>
                            <HeaderText>
                                <Link to={'/deleted'}>
                                    <HeaderElemText className="headerElemText">Deleted</HeaderElemText>
                                </Link>
                            </HeaderText>
                        </HeaderUl>
                    </HeaderNav>
                        :
                    <BurgerWrapper>
                        <BurgerImg
                            src={burgerImg} 
                            alt="burger"
                            onClick = {() => burgerHandler(true)}
                        />
                    </BurgerWrapper>
                }
            </HeaderMenu>
        </HeaderWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        allTasks: state.allTasks
    }
}

const mapDispatchToProps = {
    forFindTask: findTask
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);