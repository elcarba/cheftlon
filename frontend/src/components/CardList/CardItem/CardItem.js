import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {Flag, Star} from "@material-ui/icons";
import ImgDefault from '../../../assets/images/default-img.png';

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
        minHeight: 100,
        minWidth: 320,
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
    },
}));

export default function CardItem({ name, biography, imgUrl, country, sumScore, totalScore }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        { name }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { biography }
                    </Typography>
                </CardContent>

                <div className={classes.footer} >
                    <div className={classes.rating}>
                        <Rating name="read-only" value={sumScore} readOnly />
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

                        <IconButton aria-label="play/pause" className={classes.rate}>
                            <Star />
                        </IconButton>
                    </div>
                </div>
            </div>

            <CardMedia
                className={classes.cover}
                image={imgUrl ? imgUrl : ImgDefault}
                title={name}
            />
        </Card>
    );
}