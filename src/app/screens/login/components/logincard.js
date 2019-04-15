import React, {Component} from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
      maxWidth: 575,
      textAlign: 'center'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
};

class LoginCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginId: "",
            password: ""
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    loginUser = () => {
        this.props.login(this.state.loginId, this.state.password);
    }

    render() {
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        LOGIN
                    </Typography>
                    <TextField
                        id="LoginId"
                        label="Login ID"
                        placeholder="Please enter your Login Id"
                        helperText=""
                        fullWidth
                        className={classes.textField}
                        margin="normal"
                        value={this.state.loginId}
                        onChange={this.handleChange("loginId")}
                    />
                    <TextField
                        id="Password"
                        label="Password"
                        placeholder="Please enter your Password"
                        helperText=""
                        fullWidth
                        type="password"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.loginUser}>
                        Login
                    </Button>
                </CardContent>
            </Card>
        )
    }
}

LoginCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);
