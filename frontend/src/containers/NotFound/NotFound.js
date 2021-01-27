import React from 'react';
import {
    Box,
    Container,
    Typography,
    makeStyles
} from '@material-ui/core';
import NotFoundImg from '../../assets/images/error-404.png';
import Layout from "../../components/Layout/Layout";

const useStyles = makeStyles((theme) => ({
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 200
    }
}));

export default function NotFound(){
    const classes = useStyles();

    return (
        <Layout>
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <Container maxWidth="md">
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="h4"
                        gutterBottom
                    >
                        404: Page Not Found
                    </Typography>
                    <Typography
                        align="center"
                        color="textSecondary"
                        variant="subtitle2"
                    >
                       Use the navigation to go through the App.
                    </Typography>
                    <Box textAlign="center">
                        <img
                            alt="not_found"
                            className={classes.image}
                            src={NotFoundImg}
                        />
                    </Box>
                </Container>
            </Box>
        </Layout>
    );
}