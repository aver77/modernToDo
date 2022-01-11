import React, {useState, useEffect, useRef, useCallback} from 'react';
import useWindowDimensions from '../../../../windowSize/windowSize';
import styled from 'styled-components';

import { findTask as findTaskAction } from '../../../../redux/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';

import HeaderTitle from './components/HeaderTitle';
import HeaderInputSection from './components/HeaderInput/HeaderInputSection';
import HeaderNav from './components/HeaderNav/HeaderNav';
import HeaderBurgerItem from './components/HeaderNav/HeaderBurgerItem';

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
const HeaderMenu = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;

//установка тасков, отслеживание нужен ли бургер => отрисовка его картинки, поиск таска 
const Header = ({burgerHandler}) => {
    const {width} = useWindowDimensions();
    const [displayWidth, changeDisplayWidth] = useState({width}.width);

    const dispatch = useDispatch();
    const allTasks = useSelector(state => state.tasksSlice.allTasks);

    const inputFindRef = useRef(null);

    useEffect(() => {
        changeDisplayWidth({width}.width);
    },[width, displayWidth]);
    
    const inputRefHandler = useCallback(() => {
        let result;
        !inputFindRef? result = '' : result = inputFindRef.current.value;
        return result;
    }, [inputFindRef]);

    const findDataHandler = useCallback((data) => {
        if (data) {
            console.log('data text', data);
            const index = allTasks.findIndex(item => item.taskText.slice(0, data.length) === data);
            dispatch(findTaskAction(index));
        }     
    },[allTasks, dispatch]);

    const inputFindRefHandler = useCallback(() => {
        const data = inputRefHandler();
        findDataHandler(data);
        inputFindRef.current.value = '';
    },[findDataHandler, inputRefHandler]);

    return (
        <HeaderWrapper>
            <HeaderMenu className="_container">
                <HeaderTitle title="NW Project"/>
                <HeaderInputSection inputFindRefHandler={inputFindRefHandler} inputFindRef={inputFindRef}/>
                {displayWidth >= 1135?<HeaderNav/> : <HeaderBurgerItem burgerHandler={burgerHandler}/>}
            </HeaderMenu>
        </HeaderWrapper>
    );
};
export default React.memo(Header);