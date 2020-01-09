import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_styles.scss';

import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';
import NewPage from './components/pages/NewPage';
import SettingsPage from './components/pages/SettingsPage';

const Application = () => (
    <Router>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/new" component={NewPage} />
            <Route path="/settings" component={SettingsPage} />
        </Switch>
    </Router>
);

ReactDOM.render(<Application />, document.getElementById('app'));