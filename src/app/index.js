import React, { Component } from "react";

import './styles.css'
import Screens from './screens/index';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Screens />
        )
    }
}

export default MainApp;
