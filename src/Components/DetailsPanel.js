import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#1769aa',
        minHeight: '82vh',
        borderRadius: '5px'
    }
});

const DetailsPanel = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

        </div>
    );
}

export default DetailsPanel;