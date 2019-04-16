import React, { Component } from "react";

import HeaderComponent from "../../components/header/index";
import styles from './styles';

import { getAllProducts } from '../../services/inventory.service';

import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            snackbarOpen: false,
            Transition: null
        }
    }

    handleClick = Transition => () => {
        this.setState({ snackbarOpen: true, Transition });
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        getAllProducts().then(response => {
            console.log('Hey there, you just hit me');
        })
        .catch(error => {
            console.error(error);
        });
    }

    closeSnackbar() {
        this.setState({ snackbarOpen: false });
    }

    render() {
        const snackbar = (
            <Snackbar
            open={this.state.snackbarOpen}
            onClose={this.closeSnackbar}
            TransitionComponent={this.state.Transition}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            message={<span id="message-id">This is the message</span>}
            />
        );

        return(
            <div>
                <HeaderComponent />
                <div style={styles.textDiv}>
                    <h1>You are in Inventory component</h1>
                    <Button onClick={this.handleClick(TransitionUp)}>Click me</Button>
                </div>
                {snackbar}
            </div>
        )
    }
}

export default Inventory;
