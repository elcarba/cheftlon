import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default function Modal({ title, description, open, onClose, onProceed, onProceedLabel }) {
    const handleCancel = () => {
        onClose();
    };

    const handleProceed = () => {
        onClose();
        onProceed();
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            aria-labelledby="modal"
            open={open}
        >
            <DialogTitle id="modal">{ title }</DialogTitle>
            <DialogContent dividers>
                { description }
            </DialogContent>

            <DialogActions>
                {
                    onProceed && (
                        <Button onClick={handleProceed} color="primary">
                            { onProceedLabel ? onProceedLabel : 'Ok' }
                        </Button>
                    )
                }

                <Button autoFocus onClick={handleCancel} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}