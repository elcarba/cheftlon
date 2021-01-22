import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("userInfo") ? (
                <Layout>
                    <Component {...props} />
                </Layout>
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);