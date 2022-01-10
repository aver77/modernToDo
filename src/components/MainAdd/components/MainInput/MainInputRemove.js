import React, { useCallback} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeAllTasks } from '../../../../redux/tasksSlice';

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

const MainInputRemove = ({clearForm, openModalDeleteHandler, openWarnDialogHandler, isDelete}) => {
    const dispatch = useDispatch();

    const removeTasks = useCallback(() => {
        clearForm();
        openWarnDialogHandler(true);
        if (isDelete) {
            dispatch(removeAllTasks());
            openModalDeleteHandler(true);
        }
    },[clearForm, openWarnDialogHandler, isDelete, dispatch, openModalDeleteHandler])

    return (
        <MainInputRemoveElem
            title="Remove all tasks"
            src={remove}
            alt="remove all"
            onClick = { removeTasks }
        />
    );
};

export default MainInputRemove;