import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import TaskView from '../View/TaskView';

import TaskModal from '../../../MUIModals/TaskModal';

const TasksWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -10px;
`

const TaskWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    border: 2px solid black;
    border-radius: 10px;
    background:#EE6E73;
    margin-top: 10px;
`;

const TasksViewPaginate = ({name, currentTasks, handlePrevPageBtn}) => {

    const [openModalDeleteSingle, setOpenModalDeleteSingle] = useState(false);
    const openModalDeleteSingleHandler = useCallback((value) => {
        setOpenModalDeleteSingle(value);
    },[]);
    
    useEffect(() => {
        if (!currentTasks.length) {
            handlePrevPageBtn();
        }
    }, [currentTasks.length, handlePrevPageBtn]);
    
    return (
        <TasksWrapper>  
            {        
                currentTasks.map((item, index) => {
                    return (
                        <TaskWrapper key={index}>
                            <TaskView 
                                task={item} 
                                number={index} 
                                name={name}
                                openModalDeleteSingleHandler={openModalDeleteSingleHandler} 
                            />
                        </TaskWrapper>
                    );
                })
            }
            {openModalDeleteSingle && <TaskModal openModalHandler={openModalDeleteSingleHandler} text="Task deleted" severity="success" color="#F44437"/>}
        </TasksWrapper>   
    )
};
export default React.memo(TasksViewPaginate);