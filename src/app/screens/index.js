import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/index";
import Home from "./home/index";
import Inventory from "./inventory/index";
import Orders from "./orders/index";
import Profile from "./profile/index";
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
                    <Route path="/home" component={Home} />
                    <Route path="/inventory" component={Inventory} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/profile" component={Profile} />
                    <Route component={ErrorScreen} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Screens;
