import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    ListItem: {
        textAlign: 'center',
        color: 'white',
        width:'70%',
        margin: '10px auto',
        borderRadius: '5px',
        backgroundColor: '#2196f3',
        '&:hover': {
            color: 'white',
            backgroundColor: '#1769aa'
        },
        '&$selected': {
            backgroundColor: '#1769aa',
            color: 'white',
            '&:hover': {
                color: 'white',
                backgroundColor: '#1769aa'
            },            
        },
    },
    selected: {},
}));

const SideDrawer = (props) => {
    const open = props.open;
    const componentHandler = props.componentHandler;
    const selectedComponent = props.selectedComponent;
    console.log(selectedComponent);
    const menuItems = [{name: 'Empty Page', id: 'emptyPage'}, {name: 'Data', id: 'dataPage'}];
    const classes = useStyles();

    return(
        <Drawer 
            className={classes.drawer}  
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
              }}>
            <div className={classes.drawerHeader}> 
            <IconButton onClick={props.closeDrawerHandler}>
                <ChevronLeftIcon />
            </IconButton>
            </div>            
            <Divider />
            <List>
          {menuItems.map((item, index) => (
            <ListItem button selected={selectedComponent === item.id} key={item.id} classes={{ root: classes.ListItem, selected: classes.selected }} onClick={(event) => componentHandler(event, item.id)}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
    </Drawer>
    );
}

export default SideDrawer;