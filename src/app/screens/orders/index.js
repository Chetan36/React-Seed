import React, { Component } from "react";

import HeaderComponent from "../../components/header/index";
import "./styles.css";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <HeaderComponent />
                <h1>You are in Orders component</h1>
            </div>
        )
    }
}

export default Orders;
