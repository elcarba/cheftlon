import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TopBar from '../TopBar/TopBar';
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBarSpacer: theme.mixins.toolbar,
}));

function Layout(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar/>
            <main>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            { props.children }
                        </Grid>
                    </Grid>
                </Container>
            </main>

            <Footer/>
        </div>
    );
}

export default Layout;