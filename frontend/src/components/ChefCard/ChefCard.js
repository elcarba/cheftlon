import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Card, CardContent, CardHeader, CardMedia, Hidden, IconButton, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {Flag, Star} from "@material-ui/icons";
import ImgDefault from '../../assets/images/default-img.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 545,
        maxHeight: 300,
        display: 'flex',
        margin: theme.spacing('auto', 'auto', 2 , 'auto'),
    },
    header: {
        paddingBottom: 0
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        minHeight: 110,
        minWidth: 262,
        maxHeight: 200,
        maxWidth: 400,
        overflow: 'auto',
        position: 'relative',
        paddingTop: 0
    },
    cover: {
        width: 251,
    },
    footer: {
        display: 'flex',
        padding: theme.spacing(2),
        position: 'relative'
    },
    rating: {
        marginLeft: theme.spacing(1),
    },
    rate: {
        position: "absolute",
        right: 10
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: theme.spacing("auto", "auto", 2, "auto"),
    },
}));

export default function ChefCard({ name, biography, imgUrl, country, sumScore, totalScore, onStarClick }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardHeader
                    className={classes.header}
                    title={
                        <Typography gutterBottom variant="h5" component="h2">
                            { name }
                        </Typography>
                    }
                    avatar={
                        <Hidden smUp>
                            <Avatar className={classes.avatar} src={imgUrl} alt={name} />
                        </Hidden>
                    }
                />
                <CardContent className={classes.content}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        { biography }
                    </Typography>
                </CardContent>

                <div className={classes.footer} >
                    <div className={classes.rating}>
                        <Rating name="read-only" value={sumScore > 0 ? sumScore / totalScore : 0} readOnly />
                        <Typography variant="body2" color="textSecondary">
                            { totalScore } global ratings
                        </Typography>
                    </div>

                    <div>
                        <IconButton aria-label="play/pause" disabled>
                            <Flag />
                            <Typography variant="subtitle2" color="textSecondary">
                                { country }
                            </Typography>
                        </IconButton>

                        <IconButton aria-label="play/pause" className={classes.rate} onClick={onStarClick}>
                            <Star />
                        </IconButton>
                    </div>
                </div>
            </div>

            <Hidden xsDown>
                <CardMedia
                    className={classes.cover}
                    image={imgUrl ? imgUrl : ImgDefault}
                    title={name}
                />
            </Hidden>
        </Card>
    );
}