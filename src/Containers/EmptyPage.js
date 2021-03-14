import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const EmptyPage = () => {
    return (
        <Paper style={{height: '85vh', padding: '10px'}}>
            <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom>
                This Page is Empty.
            </Typography>
        </Paper>
    );                   
}

export default EmptyPage;