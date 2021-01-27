import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    }
}));

export default function CustomPaper({ title, children }) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>

            { children }
        </Paper>
    );
}

CustomPaper.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};