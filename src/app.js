import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_styles.scss';

import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';

const Application = () => (
    <Router>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
        </Switch>
    </Router>
);

ReactDOM.render(<Application />, document.getElementById('app'));