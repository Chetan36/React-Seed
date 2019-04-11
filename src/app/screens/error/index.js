import React, { Component } from "react";
import "./styles.css";

class ErrorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h1>404 Error: Path does not exist</h1>
            </div>
        )
    }
}

export default ErrorScreen;
