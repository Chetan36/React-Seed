// import React, { Component } from "react";



// import Snackbar from '@material-ui/core/Snackbar';
// import Slide from '@material-ui/core/Slide';
// import Button from '@material-ui/core/Button';

// function TransitionUp(props) {
//     return <Slide {...props} direction="up" />;
// }

// class Inventory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//             snackbarOpen: false,
//             Transition: null
//         }
//     }

    

    

//     handleClick = Transition => () => {
//         this.setState({ snackbarOpen: true, Transition });
//     };

//     closeSnackbar() {
//         this.setState({ snackbarOpen: false });
//     }

//     render() {
//         const snackbar = (
//             <Snackbar
//                 open={this.state.snackbarOpen}
//                 onClose={this.closeSnackbar}
//                 TransitionComponent={this.state.Transition}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//                 message={<span id="message-id">This is the message</span>}
//             />
//         );

//         return(
//             <div>
//                 <HeaderComponent />
//                 <div style={styles.textDiv}>
//                     <h1>You are in Inventory component</h1>
//                     <Button onClick={this.handleClick(TransitionUp)}>Click me</Button>
//                 </div>
//                 {snackbar}
//             </div>
//         )
//     }
// }

// export default Inventory;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import HeaderComponent from "../../components/header/index";
import styles from './styles';

import { getAllProducts } from '../../services/inventory.service';

class Inventory extends React.Component {
    state = {
        open: false,
        products: []
    };

    componentDidMount() {
        this.getProducts();
    }
    
    handleClick = () => {
        this.setState({ open: true });
    };
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
    };

    getProducts() {
        getAllProducts().then(response => {
            console.log('Hey there, you just hit me');
        })
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        const { classes } = this.props;
        return (
          <div>
            <HeaderComponent />
            <Button onClick={this.handleClick}>Open simple snackbar</Button>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">This is the simple message</span>}
              action={[
                <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                  UNDO
                </Button>,
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            />
          </div>
        );
    }
}

Inventory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inventory);
