import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export function successSnackbar(message, open, closeCallback) {
  return (
    <Snackbar
      open={open}
      onClose={closeCallback}
      TransitionComponent={this.state.Transition}
      message={<span id="message-id">{message}</span>}
    />
  )
}

// class CustomizedSnackbars extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClick = () => {
//     this.setState({ open: true });
//   };

//   handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <Button className={classes.margin} onClick={this.handleClick}>
//           Open success snackbar
//         </Button>
//         <Snackbar
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           open={this.state.open}
//           autoHideDuration={6000}
//           onClose={this.handleClose}
//         >
//           <MySnackbarContentWrapper
//             onClose={this.handleClose}
//             variant="success"
//             message="This is a success message!"
//           />
//         </Snackbar>
//         <MySnackbarContentWrapper
//           variant="error"
//           className={classes.margin}
//           message="This is an error message!"
//         />
//         <MySnackbarContentWrapper
//           variant="warning"
//           className={classes.margin}
//           message="This is a warning message!"
//         />
//         <MySnackbarContentWrapper
//           variant="info"
//           className={classes.margin}
//           message="This is an information message!"
//         />
//         <MySnackbarContentWrapper
//           variant="success"
//           className={classes.margin}
//           message="This is a success message!"
//         />
//       </div>
//     );
//   }
// }

// CustomizedSnackbars.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles2)(CustomizedSnackbars);