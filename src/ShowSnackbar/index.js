import * as React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const ShowSnackbar = (props) => {
    // console.log(props);
    // const [snackbar, setSnackbar] = React.useState({open: props.open, text: props.text});
    //
    // const showSnackbar = (text) => {
    //     setSnackbar({...snackbar, open: true, text: text});
    // };
    //
    // const closeSnackbar = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //
    //     setSnackbar({...snackbar, open: false});
    // };

    return (
        <Snackbar open={props.open} autoHideDuration={600} onClose={props.closeSnackbar}>
            <Alert onClose={props.closeSnackbar} severity="success">
                {props.text}
            </Alert>
        </Snackbar>
    );
}

export default ShowSnackbar;
