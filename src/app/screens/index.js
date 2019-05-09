import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/index";
import Dashboard from './dashboard/index';
import Users from './users/index';
import Items from './items/index';
import ErrorScreen from "./error/index";

class Screens extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/users" component={Users} />
                    <Route path="/items" component={Items} />
                    <Route component={ErrorScreen} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Screens;
