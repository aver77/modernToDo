import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import TaskModal from '../../../MUIModals/TaskModal';

import { likeTask, solveTask, removeTask, unSolveTask, unLikeTask, removeRemovedTask } from '../../../../redux/tasksSlice';
import { useDispatch } from 'react-redux';

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

const TaskImage = ({imgLink, imgAlt, imgTitle, id, solved, liked, name}) => {
    const dispatch = useDispatch();

    const [openModalDeleteSingle, setOpenModalDeleteSingle] = useState(false);

    const openModalDeleteSingleHandler = useCallback((value) => {
        setOpenModalDeleteSingle(value);
    },[]);

    return (
        <>
            <TaskImg
                src={imgLink}
                alt={imgAlt}
                title={imgTitle}
                onClick={() => {
                    if (imgAlt === "solve") {
                        if (name !== "deleted") {
                            if (solved) dispatch(unSolveTask(id));
                            else dispatch(solveTask(id));
                        }
                        else console.log('you can only remove this task');
                    }
                    if (imgAlt === "like") {
                        if (name !== "deleted") {
                            if (liked) dispatch(unLikeTask(id));
                            else dispatch(likeTask(id)); 
                        } 
                        else console.log('you can only remove this task');   
                    }
                    if (imgAlt === "delete") {
                        if (name === "deleted") {
                            dispatch(removeRemovedTask(id));
                        }
                        else {
                            openModalDeleteSingleHandler(true);
                            dispatch(removeTask(id));
                        }
                    }
                }}                 
            />
            {openModalDeleteSingle && <TaskModal openModalHandler={openModalDeleteSingleHandler} text="Task deleted" severity="success" color="#F44437"/>}
        </>
    );
};
export default React.memo(TaskImage);