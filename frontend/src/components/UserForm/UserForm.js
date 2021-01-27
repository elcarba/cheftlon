import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
    Grid,
    Button,
    TextField,
    makeStyles, Typography, Checkbox
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
    roleGrid: {
        margin: theme.spacing(1, 0, 0, -1)
    }
}));

const UserForm = ({
      type,
      submitTxt,
      initValues,
      onSubmitHandler,
      submitting,
      error,
      editing,
      inAdmin
}) =>
{
    const classes = useStyles();

    const checkType = () => {
        const defaultSchema = {
            email: Yup.string().email('Must be a valid email')
                .max(255).required('Email is required'),
        };

        const cForm = {
            validations: defaultSchema
        };

        if(type !== 'login'){
            cForm.validations.name = Yup.string().max(255).required('Name is required');
        }

        if(editing){
            cForm.validations.password = Yup.string()
                .matches(
                    new RegExp("^(?=.*[A-Z])(?=.{8,})"),
                    'Password must contain 8 characters and at least 1 capital letter'
                );
        }else{
            cForm.validations.password = Yup.string()
                .matches(
                    new RegExp("^(?=.*[A-Z])(?=.{8,})"),
                    'Password must contain 8 characters and at least 1 capital letter'
                )
                .required('Password is required');
        }

        return cForm;
    };

    const renderFooterForm = () => {
        let footerForm = null;

        if(type === 'login' || type === 'signup'){
            footerForm = (
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
            );
        }

        return footerForm;
    };

    return (
        <Formik
            enableReinitialize
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
                            type !== 'login' ?
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
                                disabled={editing}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                error={Boolean(touched.password && errors.password)}
                                fullWidth
                                helperText={touched.password && errors.password}
                                label="Password"
                                required={!editing}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    {
                        inAdmin && (
                            <Grid item xs={12} className={classes.roleGrid}>
                                <Checkbox
                                    checked={values.isAdmin}
                                    name="isAdmin"
                                    onChange={handleChange}
                                    color="primary"
                                />
                                <Typography
                                    color="textSecondary"
                                    variant="inherit"
                                >
                                    Admin?
                                </Typography>
                            </Grid>
                        )
                    }

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

                    {
                        renderFooterForm()
                    }
                </form>
            )}
        </Formik>
    );
};

export default UserForm;