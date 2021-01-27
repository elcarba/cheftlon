import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export const PrivateRoute = ({ component: Component, adminRoute, ...rest }) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    return (
        <Route
            {...rest}
            render={props =>
                userInfo && userInfo.token ? (
                    ((userInfo.isAdmin && adminRoute) || !adminRoute) ? (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    ): (
                        <Redirect to="/" />
                    )
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );

};