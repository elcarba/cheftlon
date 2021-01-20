import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./containers/Home/Home";
import SignUp from "./containers/SignUp/SignUp";

function App() {
    //TODO: ADD PROTECTED ROUTES..
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route
                    exact
                    path='/signup'
                    component={SignUp}
                />
            </Switch>
        </Router>
    );
}

export default App;
