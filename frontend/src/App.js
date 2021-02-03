import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./containers/Home/Home";
import SignUp from "./containers/Auth/SignUp";
import Login from "./containers/Auth/Login";
import {PrivateRoute} from "./hoc/PrivateRoute/PrivateRoute";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";
import Users from "./containers/Users/Users";
import CreateEditUser from "./containers/Users/CreateEditUser";
import NotFound from "./containers/NotFound/NotFound";
import Profile from "./containers/Users/Profile";
import Snackbar from "./components/Snackbar/Snackbar";
import Chefs from "./containers/Chefs/Chefs";
import CreateEditChef from "./containers/Chefs/CreateEditChef";

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
            <Snackbar />
            <Router>
                <Switch>
                    <PrivateRoute exact path='/users' component={Users} adminRoute />
                    <PrivateRoute path='/users/new' component={CreateEditUser} adminRoute />
                    <PrivateRoute path='/users/:id/edit' component={CreateEditUser} adminRoute />
                    <PrivateRoute exact path='/chefs' component={Chefs} adminRoute />
                    <PrivateRoute path='/chefs/new' component={CreateEditChef} adminRoute />
                    <PrivateRoute path='/chefs/:id/edit' component={CreateEditChef} adminRoute />
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
