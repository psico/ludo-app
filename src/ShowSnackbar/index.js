import React, { PureComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class ShowSnackbar extends PureComponent {
    message = '';
    state = {
        open: false,
    };

    handleClick = (message) => {
        this.message = message;
        this.setState({
            open: true
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
                <Alert onClose={this.handleClose} severity="success">
                    {this.message}
                </Alert>
            </Snackbar>
        )
    }
}
