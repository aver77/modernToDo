import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TaskModal from '../../../MUIModals/TaskModal';
import TaskDialogRemoveWarn from '../../../MUIModals/TaskDialogRemoveWarn';
import remove from '../../../../images/removeAll.png';

const MainInputRemoveElem = styled.img`
    width: 38px;
    height: 38px;
    transition: 0.3s ease;
    margin-left: 12px;
    &:focus,&:hover,&:active {
        opacity: 0.5;
    }
    @media screen and (max-width: 793px) {
        & {
            margin-left: 6px;
            width: 26px;
            height: 26px;
        }
    }
`;

const MainInputRemove = ({clearForm}) => {
    const allTasks = useSelector(state => state.tasksSlice.allTasks);

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openDialogWarn, setOpenDialogWarn] = useState(false);

    const openModalDeleteHandler = useCallback((value) => {
        setOpenModalDelete(value);
    },[]);
    const openWarnDialogHandler = useCallback((value) => {
        setOpenDialogWarn(value);
    },[]);
    
    const removeTasks = () => {
        clearForm();
        if (allTasks && allTasks.length) {
            openWarnDialogHandler(true);
        }
    };

    return (
        <>
            <MainInputRemoveElem
                title="Remove all tasks"
                src={remove}
                alt="remove all"
                onClick = { removeTasks }
            />
            {openDialogWarn && <TaskDialogRemoveWarn openDialogHandler={openWarnDialogHandler} openModalHandler={openModalDeleteHandler}/>}
            {openModalDelete && <TaskModal openModalHandler={openModalDeleteHandler} text="All tasks deleted" severity="success" color="#F44437"/>}
        </>
    );
};
export default React.memo(MainInputRemove);