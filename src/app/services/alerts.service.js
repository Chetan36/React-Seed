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
  