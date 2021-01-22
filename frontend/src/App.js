import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./containers/Home/Home";
import SignUp from "./containers/Auth/SignUp";
import Login from "./containers/Auth/Login";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#fafafa"
        }
    },
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route
                        exact
                        path='/signup'
                        component={SignUp}
                    />
                    <Route
                        exact
                        path='/login'
                        component={Login}
                    />
                    {/*<Route component={NotFound} />*/}
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
