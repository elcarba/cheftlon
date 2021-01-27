import React from 'react';
import {CircularProgress, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    loader: {
        background: '#ffffffb3',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: 999
    }
}));

const Loader = ({ isLoading }) => {
    const classes = useStyles();
    return (
        isLoading && (
            <Grid
                className={classes.loader}
                container
                justify="center"
                alignItems="center"
            >
                <CircularProgress />
            </Grid>
        )
    )
}

export default Loader;