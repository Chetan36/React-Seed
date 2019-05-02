import React, { Component } from "react";

import HeaderComponent from "../../components/header/index";
import styles from './styles';

class CallScripts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div>
                <HeaderComponent />
                <div style={styles.textDiv}>
                    <h1>You are in CallScripts component</h1>
                </div>
            </div>
        )
    }
}

export default CallScripts;