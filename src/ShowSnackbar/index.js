
import React, { PureComponent } from 'react';
import Styles from './snackbar.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class ShowSnackbar extends PureComponent {
    // message = ''
    //
    // state = {
    //     isActive: false,
    // }
    //
    // openSnackBar = (message = 'Something went wrong...') => {
    //     this.message = message;
    //     this.setState({ isActive: true }, () => {
    //         setTimeout(() => {
    //             this.setState({ isActive: false });
    //         }, 3000);
    //     });
    // }

    // render() {
    //     const { isActive } = this.state;
    //     return (
    //         <div className = {isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
    //             {this.message}
    //         </div>
    //     )
    // }

    message = 'teste';
    state = {
        open: false,
    };

    handleClick = (message) => {
        // setOpen(true);
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
        // const classes = useStyles();
        // const [open, setOpen] = React.useState(false);

        // const handleClick = () => {
        //     setOpen(true);
        // };
        //
        // const handleClose = (event, reason) => {
        //     if (reason === 'clickaway') {
        //         return;
        //     }
        //
        //     setOpen(false);
        // };

        return (
            <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    {this.message}
                </Alert>
            </Snackbar>
        )
    }
}
