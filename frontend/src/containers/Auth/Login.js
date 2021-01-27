import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from "../../store/Auth/authActions";
import UserForm from "../../components/UserForm/UserForm";
import {Container, Typography, Avatar, makeStyles} from '@material-ui/core';
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
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
                <Avatar src={Logo} alt="logo" className={classes.large}/>
                <Typography component="h1" variant="h5">
                    <strong>Sign In</strong>
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

            <Footer bgWhite />
        </Container>
    );
};

export default Login;