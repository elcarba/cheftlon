import React from 'react';
import { CircularProgress, Grid } from "@material-ui/core";

const Loader = () => {
    return (
        <Grid
            style={{ height: "50vh", position: 'absolute' }}
            container
            justify="center"
            alignItems="center"
        >
            <CircularProgress />
        </Grid>
    )
}

export default Loader;