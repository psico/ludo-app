import React, { PureComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class ShowSnackbar extends PureComponent {
    state = {
        open: false,
        message: '',
        severity: "success"
    };

    handleClick = (message, severity = "success") => {
        this.setState({
            open: true,
            message: message,
            severity: severity
        });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            open: false
        });
    };


    render() {
        return (
            <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity={this.state.severity}>
                    {this.state.message}
                </Alert>
            </Snackbar>
        )
    }
}
