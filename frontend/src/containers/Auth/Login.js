import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from "../../store/Auth/authActions";
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

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const initVal = {
        email: '',
        password: '',
    };

    const dispatch = useDispatch();
    const authReducer = useSelector((state) => state.authReducer);
    const { isLoading, error, currentUser } = authReducer;

    useEffect(() => {
        if (currentUser) {
            history.push("/")
        }

        //Need history to be used without warnings. Instance
    }, [history, currentUser]);

    const submitHandler = (values) => {
        const { email, password } = values;
        dispatch(login(email, password));
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>

                <UserForm
                    initValues={initVal}
                    type={'login'}
                    submitTxt={'Sign In'}
                    onSubmitHandler={submitHandler}
                    submitting={isLoading}
                    error={error}
                />

            </div>

            <Footer/>
        </Container>
    );
};

export default Login;