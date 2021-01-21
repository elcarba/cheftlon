import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
    Grid,
    Button,
    TextField,
    makeStyles
} from '@material-ui/core';
import Alert from "../../components/Alert/Alert";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const UserForm = ({
      type,
      submitTxt,
      initValues,
      onSubmitHandler,
      submitting,
      error
}) =>
{
    const classes = useStyles();

    const checkType = () => {
        const defaultSchema = {
            email: Yup.string().email('Must be a valid email')
                .max(255).required('Email is required'),
            password: Yup.string()
                .matches(
                    new RegExp("^(?=.*[A-Z])(?=.{8,})"),
                    'Password must contain 8 characters and at least 1 capital letter'
                )
                .required('Password is required'),
        };

        const cForm = {
            validations: defaultSchema
        };

        if(type === 'signup'){
            cForm.validations.name = Yup.string().max(255).required('Name is required');
        }

        return cForm;
    };

    return (
        <Formik
            initialValues={initValues}
            validationSchema={
                Yup.object().shape(checkType().validations)
            }
            onSubmit={(values) => {
                onSubmitHandler(values);
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
                        {
                            type === 'signup' ?
                                (
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
                                ): null
                        }

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
                        disabled={submitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        className={classes.submit}
                    >
                        { submitTxt }
                    </Button>

                    {
                        error &&
                        <>
                            <Alert severity="error">
                                { error }
                            </Alert>
                            <br/>
                        </>
                    }

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to={type === 'login' ? "signup":'login'}>
                                {
                                    type === 'signup' ?
                                        "Already have an account? Sign in":
                                        "Don't have an account? Sign Up"
                                }
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    );
};

export default UserForm;