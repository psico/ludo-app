import * as React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function handleClick(props) {

// }

    const ShowSnackbar = (props) => {
        console.log(props);
        const [snackbar, setSnackbar] = React.useState({open: props.open, text: props.text});

        // const handleClick = (text) => {
        //     setSnackbar({ ...snackbar, open: true, text: text });
        // };

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            setSnackbar({...snackbar, open: false});
        };

        return (
            <Snackbar open={snackbar.open} autoHideDuration={600} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {snackbar.text}
                </Alert>
            </Snackbar>
        );
    }

    ShowSnackbar(props);
}

