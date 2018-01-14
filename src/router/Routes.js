import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Main, Toppings, AddIns, PageNotFound } from '../pages';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/toppings' component={Toppings} />
                    <Route path='/addins' component={AddIns} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}
