import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

function LoginCard(props) {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    LOGIN
                </Typography>
                <TextField
                    id="loginId"
                    label="Login ID"
                    placeholder="Enter your Login ID"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="password"
                    label="Login Password"
                    placeholder="Enter your Login Password"
                    className={classes.textField}
                    margin="normal"
                    type="password"
                    fullWidth
                />
                <div style={{ marginTop: 10 }}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

LoginCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);
