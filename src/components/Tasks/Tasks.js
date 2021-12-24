import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeTask,solveTask,likeTask } from '../../redux/actions';

import Pagination from '../Pagination/Pagination';
import likeImg from '../../images/like.png';
import solveImg from '../../images/solve.png';
import deleteImg from '../../images/delete.png';
import removeAll from '../../images/removeAll.png';
import nextPic from '../../images/next.png';
import prevPic from '../../images/prev.png';

const TasksWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    border: 2px solid black;
    border-radius: 10px;
    background:#EE6E73;
`;
const TaskNumber = styled.p`
    font-size: 20px;
    padding: 22px 6px 22px 32px;
    font-weight: 500;
    @media screen and (max-width: 576px) {
        & {
            padding: 22px 6px 22px 22px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            font-size: 18px;
            padding: 24px 6px 24px 12px;
        }
    }
    @media screen and (max-width: 337px) {
        & {
            font-size: 16px;
            padding: 25px 4px 24px 12px;
        }
    }
`;
const TaskText = styled.p`
    font-size: 20px;
    padding-top: 22px;
    @media screen and (max-width: 576px) {
        & {
            padding-top: 24px;
            font-size: 18px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            padding-top: 26px;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 337px) {
        & {
            font-size: 14px;
        }
    }
`;
const TaskImgWrapper = styled.div`
    padding: 22px 32px 22px 6px;
    @media screen and (max-width: 576px) {
        & {
            padding: 22px 22px 22px 6px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            padding: 22px 12px 22px 4px;
        }
    }
`;
const TaskImg = styled.img`
    transition: .3s ease;
    height: 24px;
    width: 24px;
    padding-left: 34px;
    cursor: ${props => props.cursorDefault || "pointer"};
    &:focus,&:hover,&:active {
        opacity: 0.6;
    }
    @media screen and (max-width: 576px) {
        & {
            padding-left: 12px;
            height: 20px;
            width: 20px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            height: 18px;
            width: 18px;
            padding-left: 6px;
        }
    }
`;
const ClearImg = styled.img`
    height: 36px;
    width: 36px;
`;
const ClearImgWrapper = styled.div`
`;
const TaskPageImg = styled.img`
    height: 36px;
    width: 36px;
`
const TaskPageImgWrapper = styled.div`
`;

const DefaultView = () => {
    return (
        <TasksWrapper>
            <TaskNumber>1.</TaskNumber>
            <TaskText>Add your first task!</TaskText>
            <TaskImgWrapper>
                <TaskImg cursorDefault={"not-allowed"} src={likeImg} alt="like" title="Like task"/>
                <TaskImg cursorDefault={"not-allowed"} src={solveImg} alt="solve" title="Solve task"/>
                <TaskImg cursorDefault={"not-allowed"} src={deleteImg} alt="delete" title="Delete task"/>
            </TaskImgWrapper>
        </TasksWrapper>
    );
}
const View = ({number, task}) => {
    if (task.length) {
        return (
            <>
            <TaskNumber>{++number}.</TaskNumber>
            <TaskText>{task.taskText}</TaskText>
            <TaskImgWrapper>
                <TaskImg
                        src={likeImg}
                        alt="like" 
                        title="Like task"
                        onClick={() => likeTask(task.id)}
                    //  onClick={() => лучше-> likeTask(number) //tasks[number].liked = true}                     
                    />
                <TaskImg
                        src={solveImg}
                        alt="solve"
                        title="Solve task"
                        onClick={() => solveTask(task.id)}                    
                    />
                <TaskImg 
                        src={deleteImg} 
                        alt="delete" 
                        title="Delete task"
                        onClick={() => removeTask(task.id)}
                />
            </TaskImgWrapper>
            </>
        );
    }
    return <></>
}

const Tasks = ({tasks, name, taskFoundedIndex}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(4);
    const pagesAmount = Math.ceil(tasks?(tasks.length / tasksPerPage):null);

    const lastTaskIndex  = currentPage * tasksPerPage;
    const firstTaskIndex = lastTaskIndex - tasksPerPage;
    const currentTask = tasks?(tasks.slice(firstTaskIndex, lastTaskIndex)): [];

    //автоматически при поиске эл-та установит страницу => paginateHandler - чтоб при поиске элемента получали в него номер страницы НЕ НУЖЕН!
    useEffect(() => {
        if (taskFoundedIndex) {
            setCurrentPage(Math.ceil(taskFoundedIndex / tasksPerPage));
        }
    },[taskFoundedIndex, tasksPerPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = () => {
        setCurrentPage((page) => {
            if (page === tasks.length)
                return 1;
            return page + 1;
        })
    }
    const prevPage = () => {
        setCurrentPage((page) => {
            if (page === 1)
                return 1;
            return tasks.length;
        })
    }

    if (!tasks && name === "allTasks") { 
        return <DefaultView/>
    }
    if (!tasks || !tasks.length) {
        return <></>
    }
    console.log('дошли 1');

    // тут возвращаем уже динамическое
    return (
        //передаем не все таски а currentTask
        <TasksWrapper>
            {
                currentTask.map((item, index) => {
                    return (
                        <View key={index} number={index} task={item}/>
                    );
                })
            }
            {
                pagesAmount >= 2?
                    <>
                        <TaskPageImgWrapper>
                            <TaskPageImg 
                                src={prevPic} 
                                alt="prev"
                                onClick={() => prevPage}
                            />
                            {/* компонент pagination с пропсами */}
                            <Pagination currentIndex={currentPage} tasksPerPage={tasksPerPage} totalTasks={tasks.length} paginate={paginate}/>
                            <TaskPageImg 
                                src={nextPic} 
                                alt="next"
                                onClick={() => nextPage}
                            />
                        </TaskPageImgWrapper>
                    </>
                :
                    <></>
            }
            {
                name === "allTasks"?
                    <></>
                :
                <ClearImgWrapper>
                    <ClearImg src={removeAll} alt="remove all"/>
                </ClearImgWrapper>
            }
        </TasksWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        taskFoundedNumber: state.pageNumber
    }
}

const mapDispatchToProps = {
    removeTask,
    solveTask,
    likeTask
}

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);