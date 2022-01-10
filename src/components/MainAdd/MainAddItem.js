import React, {useCallback, useState} from 'react';
import styled from 'styled-components';

import MainDate from './components/MainDate';
import MainInputSection from './components/MainInput/MainInputSection';

import TaskModal from '../MUIModals/TaskModal';
import TaskDialog from '../MUIModals/TaskDialog';
import { useSelector } from 'react-redux';

const FlexDiv = styled.div`
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
const MainMenu = styled(FlexDiv)``;

const MainAddItem = () => {
    const allTasks = useSelector(state => state.tasksSlice.allTasks);

    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openDialogWarn, setOpenDialogWarn] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const openModalAddHandler = useCallback((value) => {
        setOpenModalAdd(allTasks.length?value:false);
    },[allTasks.length]);
    const openModalDeleteHandler = useCallback((value) => {
        setOpenModalDelete(allTasks.length?value:false)
    }, [allTasks.length]);
    const openWarnDialogHandler = useCallback((value) => {
        setOpenDialogWarn(allTasks.length?value:false)
    }, [allTasks.length]);
    const isDeleteHandler = useCallback((value) => {
        setIsDelete(allTasks.length?value:false);
    },[allTasks.length])

    return (
        <MainWrapper>
            <MainMenu className="_container">
                <MainDate/>
                <MainInputSection 
                    openModalAddHandler={openModalAddHandler} 
                    openModalDeleteHandler={openModalDeleteHandler} 
                    openWarnDialogHandler={openWarnDialogHandler} 
                    isDelete={isDelete}
                />
                {!!allTasks.length && openModalAdd && <TaskModal openModalHandler={openModalAddHandler} text="Task added" severity="success" color="#4BAE4F"/>}
                {!!allTasks.length && openModalDelete && <TaskModal openModalHandler={openModalDeleteHandler} text="All tasks deleted" severity="success" color="#F44437"/>}
                {!!allTasks.length && openDialogWarn && <TaskDialog openDialogHandler={openWarnDialogHandler} isDelete={isDeleteHandler}/>}
            </MainMenu>
        </MainWrapper>
    );
};
export default MainAddItem;