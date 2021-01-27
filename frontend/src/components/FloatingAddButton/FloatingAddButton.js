import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

export default function FloatingActionButtons(props) {
    const classes = useStyles();

    return (
        <Fab
            className={classes.fab}
            color="primary"
            aria-label="add"
            onClick={props.onClickHandler}
        >
            <AddIcon />
        </Fab>
    );
}