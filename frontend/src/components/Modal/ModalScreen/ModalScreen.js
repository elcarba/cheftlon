import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

export default function ModalScreen({ title, content, open, onClose, onProceed, onProceedLabel }) {
    const classes = useStyles();
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
            fullScreen
            aria-labelledby="modal-screen"
            open={open}
        >
            <AppBar className={classes.appBar} elevation={1}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleCancel} aria-label="close">
                        <Close />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        { title }
                    </Typography>

                    {
                        onProceed && (
                            <Button onClick={handleProceed} color="inherit">
                                { onProceedLabel ? onProceedLabel : 'Ok' }
                            </Button>
                        )
                    }

                </Toolbar>
            </AppBar>
            <div>
                { content }
            </div>
        </Dialog>
    );
}