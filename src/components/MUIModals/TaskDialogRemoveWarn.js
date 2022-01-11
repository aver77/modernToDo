import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch } from 'react-redux';
import { removeAllTasks } from '../../redux/tasksSlice';

const DialogWrap = styled.div`
    position: absolute;
    z-index: 9999;
`;

const TaskDialogRemoveWarn = ({openDialogHandler, openModalHandler = null}) => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        openDialogHandler(false);
    };

    const handleCloseRemove = () => {
        setOpen(false);
        openDialogHandler(false);
        if (openModalHandler) openModalHandler(true);
        dispatch(removeAllTasks());
    }

    return (
        <DialogWrap>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle sx={{backgroundColor: '#EE6E73', fontFamily: 'Montserrat'}} id="alert-dialog-title">
                    {"Are you sure to delete all the tasks?"}
                </DialogTitle>
                <DialogActions sx={{marginTop: '-10px', paddingRight: '20px', backgroundColor: '#EE6E73'}}>
                    <Button sx={{color: 'black', fontFamily: 'Montserrat'}} onClick={handleCloseRemove}>
                        Delete
                    </Button>
                    <Button sx={{color: 'black', fontFamily: 'Montserrat'}} onClick={handleClose} autoFocus>
                        Leave
                    </Button>
                </DialogActions>
            </Dialog>
        </DialogWrap>
    );
}
export default React.memo(TaskDialogRemoveWarn);