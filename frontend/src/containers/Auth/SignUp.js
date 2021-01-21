import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {register} from "../../store/Auth/authActions";
import UserForm from "../../components/UserForm/UserForm";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Container, Typography, Avatar, makeStyles} from '@material-ui/core';
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const initVal = {
        name: '',
        email: '',
        password: '',
    };

    const dispatch = useDispatch();
    const authReducer = useSelector((state) => state.authReducer);
    const { registering, rError, currentUser } = authReducer;

    useEffect(() => {
        if (currentUser) {
            history.push("/")
        }
    }, [currentUser]);

    const submitHandler = (values) => {
        const { name, email, password } = values;
        dispatch(register(name, email, password));
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>

                <UserForm
                    initValues={initVal}
                    type={'signup'}
                    submitTxt={'Sign Up'}
                    onSubmitHandler={submitHandler}
                    submitting={registering}
                    error={rError}
                />

            </div>

            <Footer/>
        </Container>
    );
};

export default SignUp;