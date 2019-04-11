import React, { Component } from "react";

import HeaderComponent from "../../components/header/index";
import "./styles.css";

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <HeaderComponent />
                <h1>You are in Inventory component</h1>
            </div>
        )
    }
}

export default Inventory;
