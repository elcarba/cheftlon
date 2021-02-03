import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Grid,
    Button,
    TextField,
    makeStyles,
    Avatar,
} from '@material-ui/core';
import Alert from "../../components/Alert/Alert";
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from "../../utils/Countries";

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
    },
    avatar: {
        marginTop: theme.spacing(1)
    },
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
}));

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) =>
                String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const ChefForm = ({
      initValues,
      onSubmitHandler,
      submitting,
      error,
      editing,
      isEnableReInit = false
}) =>
{
    const classes = useStyles();

    return (
        <Formik
            enableReinitialize={isEnableReInit}
            initialValues={initValues}
            validationSchema={
                Yup.object().shape({
                    name: Yup.string().max(255).required('Name is required'),
                    country: Yup.string().max(255).required('Country is required'),
                })
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
                  values,
                  setFieldValue
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
                                error={Boolean(touched.biography && errors.biography)}
                                fullWidth
                                helperText={touched.biography && errors.biography}
                                label="Biography"
                                name="biography"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="biography"
                                value={values.biography}
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Autocomplete
                                id="country"
                                options={countries}
                                classes={{
                                    option: classes.option,
                                }}
                                onChange={
                                    (e, obj) =>
                                        setFieldValue("country", obj.label)
                                }
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                inputValue={values.country}
                                renderOption={(option) => (
                                    <React.Fragment>
                                        <span>{countryToFlag(option.code)}</span>
                                        {option.label}
                                    </React.Fragment>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                        error={Boolean(touched.country && errors.country)}
                                        helperText={touched.country && errors.country}
                                        required
                                        name="country"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                )}
                            />

                        </Grid>

                        <Grid item xs={1}>
                            <Avatar className={classes.avatar} src={values.imgUrl} alt={values.name}/>
                        </Grid>

                        <Grid item xs={11}>
                            <TextField
                                error={Boolean(touched.imgUrl && errors.imgUrl)}
                                fullWidth
                                helperText={touched.imgUrl && errors.imgUrl}
                                label="Image Url"
                                name="imgUrl"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.imgUrl}
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
                        Save
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

                </form>
            )}
        </Formik>
    );
};

export default ChefForm;