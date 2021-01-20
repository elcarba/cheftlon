import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TopBar from '../TopBar/TopBar';
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    fixedHeight: {
        height: 320,
    },
}));

function Layout(props) {
    const classes = useStyles();

    return (
        <>
            <TopBar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className={classes.fixedHeight}>
                            { props.children }
                        </Grid>
                    </Grid>

                    <Box pt={4}>
                        <Footer/>
                    </Box>
                </Container>
            </main>
        </>
    );
}

export default Layout;