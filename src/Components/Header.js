import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth =240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
      display: 'none',
    },
}));

const Header = (props) => {
    const shiftHeader = props.shiftHeader;
    const classes = useStyles();

    return(
        <AppBar style={{backgroundColor: '#2196f3'}} 
        position="fixed" 
        className={clsx(classes.appBar, {
            [classes.appBarShift]: shiftHeader,
          })}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={props.openDrawerHandler} className={clsx(classes.menuButton, shiftHeader && classes.hide)}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>);
}

export default Header;