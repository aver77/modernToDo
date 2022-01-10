import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TaskModal = ({openModalHandler, text, severity, color}) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        openModalHandler(false);
    };
    
    return (
        <Stack spacing={2} sx={{ width: '100%', position: 'absolute' }}>
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert 
                    onClose={handleClose} 
                    severity={severity} 
                    sx={{ width: '100%', minWidth: '80px', backgroundColor: `${color}`, fontSize: '16px', fontFamily: 'Montserrat' }}
                >
                    {text}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
export default React.memo(TaskModal);