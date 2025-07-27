import Button from '../Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FunctionComponent } from 'react';
import DialogTypes from './Dialog.types';

const DialogModal: FunctionComponent<DialogTypes> = (
    props
) => {
    const { message, onClose, open = false, title } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
        >
            <DialogTitle id="alert-dialog-title" sx={{ paddingBottom: 1.5 }}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" dangerouslySetInnerHTML={{ __html: message }}></DialogContentText>
            </DialogContent>
            <DialogActions sx={{ paddingTop: 0 }}>
                <Button color="primary" variant="outlined" onClick={onClose}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogModal;