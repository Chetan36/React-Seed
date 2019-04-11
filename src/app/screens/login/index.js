import React, { Component } from "react";

import LoginCard from "../../components/logincard/index";
import "./styles.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div align="center" style={{marginTop: 100}}>
                <LoginCard />
            </div>
        )
    }
}

export default Login;
