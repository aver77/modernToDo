import React, { useEffect, useRef, useState }  from 'react';
import styled from 'styled-components';
import moment from 'moment';

import moonTime from '../../images/moonTime.png';
import earthTime from '../../images/earthTime.png';
import add from '../../images/add.png';
import remove from '../../images/removeAll.png';

import { connect } from 'react-redux';
import { addTask, removeAllTasks } from '../../redux/actions';

export const FlexDiv = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;
const MainWrapper = styled.div`
    margin-top: 64px;
    z-index: 2;
    @media screen and (max-width: 793px) {
        & {
            margin-top: 128px;
        }
    }
`;
const MainMenu = styled(FlexDiv)`
`;
const MainDateImgWrapper = styled(FlexDiv)`
    padding-top:24px;
    @media screen and (max-width: 1402px) {
        & {
            margin: 0 auto;
        }
    }
`;
const MainDateImg = styled.img`
    height: 64px;
    width: 64px;
    @media screen and (max-width: 403px) {
        & {
            height: 48px;
            width: 48px;
        }
    }
`;
const MainItemDateWrapper = styled(FlexDiv)`
`;
const MainItemCurrentDate = styled.span`
    margin: 0px 0 0 32px;
    font-size: 24px;
    @media screen and (max-width: 403px) {
        & {
            font-size: 19px;
            margin: 0px 0 0 16px;
        }
    }
`;
const MainInputSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:24px;
    width: 800px;
    @media screen and (max-width: 1402px) {
        & {
            text-align: center;
            width: 1200px;
        }
    }
`;
const MainInputWrapper = styled.div`
    width: 100%;
`;
const MainInputAdd = styled.img`
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
const MainInputRemove = styled(MainInputAdd)`
    margin-left: 12px;
    @media screen and (max-width: 793px) {
        & {
            margin-left: 6px;
        }
    }
`;

const MainInput = styled.input`
    margin: 0 32px 0 32px;
    border: 0px;
    border-bottom: 2px solid black;
    width: 80%;
    &[type="text"], textarea {
        background: rgba(0,0,0,0);
    }
    &::placeholder {
        font-family: 'Montserrat';
        opacity: 0.6;
        color: black;
    }

    @media screen and (max-width: 1402px) {
        & {
            width: 85%;
            margin: 0 32px 0 0px;
        }
    }
    @media screen and (max-width: 1033px) {
        & {
            width: 80%;
        }
    }
    @media screen and (max-width: 587px) {
        & {
            width: 70%;
        }
    }
    @media screen and (max-width: 391px) {
        & {
            margin: 0 8px 0 0px;
        }
    }
`;

const MainAdd = ({addTask}) => {
    const [currentDate, setCurrentDate] = useState('');
    const nowDate = moment().format('LL') + '';
    const nowTime = moment().format('LT').split('');
    const checkNowTime = nowTime[nowTime.length-2];

    console.log('render');

    const [newTask, setNewTask] = useState(null);
    const inputAddRef = useRef(null);

    function* idGen() {
        let i = 0;
        while (i < 9999) {
            yield i;
            ++i;
        }
    }
    const newVal = idGen();

    const inputSubmit = (ref) => {
        ref.current.value = '';
    }

    const inputAddRefHandler = (ref) => {
        setNewTask(inputRefHandler(ref));
        addDataHandler();
        inputSubmit(ref);
    }

    const keyPressAddHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            inputAddRefHandler(inputAddRef);
        }
    }

    const addDataHandler = () => {
        if (newTask) {
            const createdTask = [{
                taskText: newTask,
                liked: false,
                solved: false,
                id: newVal.next().value
            }];
        console.log(createdTask);   
            addTask(createdTask);
        }
    }
    
    const inputRefHandler = (ref) => {
        let result;
        !ref? result = '' : result = ref.current.value;
        return result;
    }
    
    const timeHandler = () => {
        if (checkNowTime === "A" && (nowTime[0] + nowTime[1]) === "12") //12AM 0:00
            return true;
        if (checkNowTime === "A" && nowTime.length === 7 && +nowTime[0] < 5) // < 5 daytime
            return true;   
        if (checkNowTime === "A" && nowTime.length === 7 && +nowTime[0] >= 5) // >= 5 daytime
            return false;
        if (checkNowTime === "A" && nowTime.length > 7) // 10,11,12 daytime
            return false;
        if (checkNowTime === "P" && (nowTime[0] + nowTime[1]) === "12") //12PM 12:00
            return false;
        if (checkNowTime === "P" && nowTime.length === 7 && +nowTime[0] < 6) {
            return false;
        }
        if (checkNowTime === "P" && nowTime.length === 7 && +nowTime[0] >= 6) {
            return true;
        }
        if (checkNowTime === "P" && nowTime.length > 7) { // 10,11 nighttime
            return true;
        }
        return true;
    }

    useEffect(() => {
        setCurrentDate(nowDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[nowDate, newTask]);

    return (
        <MainWrapper>
            <MainMenu className="_container">
                <MainDateImgWrapper>
                    {
                    timeHandler()?
                        <MainDateImg src={moonTime} alt="time img"/>
                        :
                        <MainDateImg src={earthTime} alt="time img"/>
                    }
                    <MainItemDateWrapper>
                        <MainItemCurrentDate>{currentDate}</MainItemCurrentDate>
                    </MainItemDateWrapper>
                </MainDateImgWrapper>
                <MainInputSection>
                    <MainInputWrapper>
                        <MainInput 
                            ref = {inputAddRef}
                            autoComplete="off" 
                            type="text" 
                            placeholder="Add a task..."
                            onKeyDown = {
                                keyPressAddHandler
                            }
                        />
                        <MainInputAdd 
                            title="Add task" 
                            src={add} 
                            alt="add"
                            onClick = {() => {
                                inputAddRefHandler(inputAddRef);
                            }}
                        />
                        <MainInputRemove
                            title="Remove all tasks"
                            src={remove}
                            alt="remove all"
                            onClick = {() => {
                                removeAllTasks();
                            }}
                        />
                    </MainInputWrapper>
                </MainInputSection>
            </MainMenu>
        </MainWrapper>
    );
};

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = {
    addTask, removeAllTasks
}

export default connect(mapStateToProps,mapDispatchToProps)(MainAdd);