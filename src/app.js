import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_styles.scss';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const Application = () => (
    <Router>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </Router>
);

ReactDOM.render(<Application />, document.getElementById('app'));