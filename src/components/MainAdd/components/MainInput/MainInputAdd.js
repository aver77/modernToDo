import React, {useState} from 'react';
import styled from 'styled-components';
import add from '../../../../images/add.png';

import TaskModal from '../../../MUIModals/TaskModal';

const MainInputAddElem = styled.img`
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

const MainInputAdd = ({inputAddRefHandler, inputAddRef}) => {
    const [openModalAdd, setOpenModalAdd] = useState(false);

    const openModalAddHandler = (value) => {
        setOpenModalAdd(value);
    }
    const clickHandler = () => {
        if (inputAddRef.current.value) {
            openModalAddHandler(true);
        }
        inputAddRefHandler();
    }

    return (
        <>
            <MainInputAddElem 
                title="Add task" 
                src={add} 
                alt="add"
                onClick = {clickHandler}
            />
            {openModalAdd && <TaskModal openModalHandler={openModalAddHandler} text="Task added" severity="success" color="#4BAE4F"/>}
        </>
    );
};

export default React.memo(MainInputAdd);