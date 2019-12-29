import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_styles.scss';

import HomePage from './components/pages/HomePage';

const Application = () => (
    <Router>
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    </Router>
);

ReactDOM.render(<Application />, document.getElementById('app'));