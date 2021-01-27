import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    avatar: {
        height: 100,
        width: 100,
        marginBottom: 10
    },
    input: {
        display: 'none',
    },
    label: {
        width: '100%',
    },
}));

export default function UserInfo({ name, picture, onUpload }) {
    const [image, setImage] = useState(null);
    const classes = useStyles();

    const uploadHandler = (e) => {
        const img = e.target.files[0];
        setImage(URL.createObjectURL(img));

        //Send original image
        onUpload(img);
    };

    return (
        <Card>
            <CardContent>
                <Box
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                >
                    <Avatar
                        className={classes.avatar}
                        src={image ? image : picture}
                    />
                    <Typography
                        component="h2"
                        variant="h6"
                        color="textSecondary"
                    >
                        {name}
                    </Typography>

                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <input
                    id="button-file"
                    type="file"
                    accept="image/*"
                    className={classes.input}
                    onChange={uploadHandler}
                />
                <label htmlFor="button-file" className={classes.label}>
                    <Button
                        fullWidth
                        color="primary"
                        component="span"
                        variant="text"
                    >
                        Upload picture
                    </Button>
                </label>
            </CardActions>
        </Card>
    );
}