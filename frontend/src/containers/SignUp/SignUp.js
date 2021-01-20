import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Grid,
    Button,
    Container,
    TextField,
    Typography,
    Avatar,
    makeStyles
} from '@material-ui/core';
import Footer from "../../components/Footer/Footer";
import {register} from "../../store/Auth/authActions";

import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
}

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
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();

    const dispatch = useDispatch();
    const authReducer = useSelector((state) => state.authReducer);
    const { rError, currentUser } = authReducer;

    useEffect(() => {
        if (currentUser) {
            history.push("/")
        }
    }, [history, currentUser]);

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
                    Create new account
                </Typography>

                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        password: '',
                    }}
                    validationSchema={
                        Yup.object().shape({
                            email: Yup.string().email('Must be a valid email')
                                .max(255).required('Email is required'),
                            name: Yup.string().max(255).required('Name is required'),
                            password: Yup.string()
                                .matches(
                                    new RegExp("^(?=.*[A-Z])(?=.{8,})"),
                                    'Password must contain 8 characters and at least 1 capital letter'
                                )
                                .required('Password is required'),
                        })
                    }
                    onSubmit={(values) => {
                        submitHandler(values);
                    }}
                >
                    {({
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          touched,
                          values
                      }) => (
                        <form onSubmit={handleSubmit} className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        error={Boolean(touched.name && errors.name)}
                                        fullWidth
                                        helperText={touched.name && errors.name}
                                        label="Name"
                                        required
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        error={Boolean(touched.email && errors.email)}
                                        fullWidth
                                        helperText={touched.email && errors.email}
                                        label="Email"
                                        required
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="email"
                                        value={values.email}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        error={Boolean(touched.password && errors.password)}
                                        fullWidth
                                        helperText={touched.password && errors.password}
                                        label="Password"
                                        required
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="password"
                                        value={values.password}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                color="primary"
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                className={classes.submit}
                            >
                                Sign up
                            </Button>

                            {
                                rError &&
                                    <>
                                        <Alert severity="error">
                                            { rError }
                                        </Alert>
                                        <br/>
                                    </>
                            }

                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/login">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>

            <Footer/>
        </Container>
    );
};

export default SignUp;