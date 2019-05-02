import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/index";
import TrainingData from "./trainingdata/index";
import CallScripts from "./callscripts/index";
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
                    <Route path="/callscripts" component={CallScripts} />
                    <Route path="/training" component={TrainingData} />
                    <Route component={ErrorScreen} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Screens;
