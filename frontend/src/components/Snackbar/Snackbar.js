import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar as SnackbarCore } from "@material-ui/core";
import Alert from "../Alert/Alert";
import { clear } from "../../store/Alert/alertActions";

export default function Snackbar() {
    const dispatch = useDispatch();
    const alertReducer = useSelector((state) => state.alertReducer);
    const { type, message } = alertReducer;
    const vertical = 'top';
    const horizontal = 'right';

    const handleClose = () => {
        dispatch(clear());
    };

    return (
        message && (
            <SnackbarCore
                anchorOrigin={{ horizontal, vertical }}
                open={true}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={type}>
                    { message }
                </Alert>
            </SnackbarCore>
        )
    );
}