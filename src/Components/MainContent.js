import React from 'react';
import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }
}));

const MainContent = (props) => {
    const classes = useStyles();
    const open = props.open;

    return(
        <main
            className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}
        >
            <div className={classes.drawerHeader} />
            {props.children}
        </main>);
}

export default  MainContent;