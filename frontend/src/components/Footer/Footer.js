import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
    footerBackground: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    }
}));

export default function Footer({ bgWhite }) {
    const classes = useStyles();

    return (
        <footer className={`${classes.footer} ${!bgWhite && classes.footerBackground}`}>
            <Container maxWidth="sm">
                <Typography align="center" variant="body2" color="textSecondary">
                    {'Copyright © Cheftion '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    );
}