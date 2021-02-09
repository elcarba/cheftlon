import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar, Box, Typography
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "auto",
        width: "50%"
    },
    avatar: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
}));

export default function RateChef({ name, imgUrl, onRateChange }) {
    const classes = useStyles();
    const [rateValue, setRateValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setRateValue(newValue);

        onRateChange(newValue);
    };

    return (
        <div className={classes.container}>
            <Box mt={4}>
                <Avatar className={classes.avatar} src={imgUrl} alt={name} />
            </Box>
            <Box mt={3}>
                <Typography gutterBottom variant="h5" component="h2">
                    { name }
                </Typography>
            </Box>
            <Box mt={1}>
                <Rating
                    name="rating"
                    value={rateValue}
                    onChange={handleChange}
                    size={"large"}
                />
            </Box>
        </div>
    );
}