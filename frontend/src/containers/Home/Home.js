import React from 'react';
import {Box, Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography} from "@material-ui/core";
import {Flag, Favorite, Star} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Rating} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 545,
        maxHeight: 245,
        display: 'flex',
        margin: theme.spacing('auto', 'auto', 2 , 'auto'),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        maxHeight: 200,
        maxWidth: 400,
        overflow: 'auto',
        position: 'relative'
    },
    cover: {
        width: 251,
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        position: 'relative'
    },
    rating: {
        marginLeft: theme.spacing(1),
    },
    rate: {
        position: "absolute",
        right: 10
    }
}));

export default function Home() {
    // render() {
        const classes = useStyles();

        return (
            <>
                <Typography style={{textAlign:'center'}} gutterBottom variant="h4" color="textPrimary">
                    Popular Chefs around the world
                </Typography>
                <Divider />
                <br/>
                <Box mt={3}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Gordom Ramsey
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>



                                    </CardContent>

                                    <div className={classes.footer} >

                                        <div className={classes.rating}>
                                            <Rating name="read-only" value={2} readOnly />
                                            <Typography variant="body2" color="textSecondary">
                                                380 global ratings
                                            </Typography>

                                        </div>

                                        <div >
                                            <IconButton aria-label="play/pause" disabled>
                                                <Flag />
                                                <Typography variant="subtitle2" color="textSecondary">
                                                    United States
                                                </Typography>
                                            </IconButton>

                                            <IconButton aria-label="play/pause" className={classes.rate}>
                                                <Star />
                                            </IconButton>
                                        </div>

                                    </div>
                                </div>

                                <CardMedia
                                    className={classes.cover}
                                    image="https://yt3.ggpht.com/ytc/AAUvwnhSeGCbeHJD09S7X-Qo8yuQKJqYdHa85OqkBDzSmg=s900-c-k-c0x00ffffff-no-rj"
                                    title="Live from space album cover"
                                />
                            </Card>
                        </Grid>

                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>



                                    </CardContent>

                                    <div className={classes.footer} >

                                        <div className={classes.rating}>
                                            <Rating name="read-only" value={2} readOnly />
                                            <Typography variant="body2" color="textSecondary">
                                                380 global ratings
                                            </Typography>

                                        </div>

                                        <div>
                                            <IconButton aria-label="play/pause">
                                                <Favorite />
                                            </IconButton>

                                            <IconButton aria-label="play/pause">
                                                <Star />
                                            </IconButton>
                                        </div>

                                    </div>
                                </div>

                                <CardMedia
                                    className={classes.cover}
                                    image="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/15517/graham_elliot__L.jpg"
                                    title="Live from space album cover"
                                />
                            </Card>
                        </Grid>

                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>



                                    </CardContent>

                                    <div className={classes.footer} >

                                        <div>
                                            <Rating name="read-only" value={2} readOnly />
                                            <Typography variant="body2" color="textSecondary">
                                                380 global ratings
                                            </Typography>

                                        </div>

                                        <Box >
                                            <IconButton aria-label="play/pause">
                                                <Favorite />
                                            </IconButton>

                                            <IconButton aria-label="play/pause">
                                                <Star />
                                            </IconButton>
                                        </Box>

                                    </div>
                                </div>

                                <CardMedia
                                    className={classes.cover}
                                    image="https://yt3.ggpht.com/ytc/AAUvwnhSeGCbeHJD09S7X-Qo8yuQKJqYdHa85OqkBDzSmg=s900-c-k-c0x00ffffff-no-rj"
                                    title="Live from space album cover"
                                />
                            </Card>
                        </Grid>

                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>



                                    </CardContent>

                                    <div className={classes.footer} >

                                        <div>
                                            <Rating name="read-only" value={2} readOnly />
                                            <Typography variant="body2" color="textSecondary">
                                                380 global ratings
                                            </Typography>

                                        </div>

                                        <Box >
                                            <IconButton aria-label="play/pause">
                                                <Favorite />
                                            </IconButton>

                                            <IconButton aria-label="play/pause">
                                                <Star />
                                            </IconButton>
                                        </Box>

                                    </div>
                                </div>

                                <CardMedia
                                    className={classes.cover}
                                    image="https://yt3.ggpht.com/ytc/AAUvwnhSeGCbeHJD09S7X-Qo8yuQKJqYdHa85OqkBDzSmg=s900-c-k-c0x00ffffff-no-rj"
                                    title="Live from space album cover"
                                />
                            </Card>
                        </Grid>

                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>



                                    </CardContent>

                                    <div className={classes.footer} >

                                        <div>
                                            <Rating name="read-only" value={2} readOnly />
                                            <Typography variant="body2" color="textSecondary">
                                                380 global ratings
                                            </Typography>

                                        </div>

                                        <Box >
                                            <IconButton aria-label="play/pause">
                                                <Favorite />
                                            </IconButton>

                                            <IconButton aria-label="play/pause">
                                                <Star />
                                            </IconButton>
                                        </Box>

                                    </div>
                                </div>

                                <CardMedia
                                    className={classes.cover}
                                    image="https://yt3.ggpht.com/ytc/AAUvwnhSeGCbeHJD09S7X-Qo8yuQKJqYdHa85OqkBDzSmg=s900-c-k-c0x00ffffff-no-rj"
                                    title="Live from space album cover"
                                />
                            </Card>
                        </Grid>

                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>



                                    </CardContent>

                                    <div className={classes.footer} >

                                        <div>
                                            <Rating name="read-only" value={2} readOnly />
                                            <Typography variant="body2" color="textSecondary">
                                                380 global ratings
                                            </Typography>

                                        </div>

                                        <Box >
                                            <IconButton aria-label="play/pause">
                                                <Favorite />
                                            </IconButton>

                                            <IconButton aria-label="play/pause">
                                                <Star />
                                            </IconButton>
                                        </Box>

                                    </div>
                                </div>

                                <CardMedia
                                    className={classes.cover}
                                    image="https://yt3.ggpht.com/ytc/AAUvwnhSeGCbeHJD09S7X-Qo8yuQKJqYdHa85OqkBDzSmg=s900-c-k-c0x00ffffff-no-rj"
                                    title="Live from space album cover"
                                />
                            </Card>
                        </Grid>



                    </Grid>
                </Box>

                {/*<Box*/}
                {/*    mt={3}*/}
                {/*    display="flex"*/}
                {/*    justifyContent="center"*/}
                {/*>*/}
                {/*    <Pagination*/}
                {/*        color="primary"*/}
                {/*        count={3}*/}
                {/*        size="small"*/}
                {/*    />*/}
                {/*</Box>*/}
            </>
        )
    // };
}