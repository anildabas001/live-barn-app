import React from 'react';
import {makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#1769aa',
        minHeight: '82vh',
        borderRadius: '5px',
        color: '#fff'
    }
});

const DetailsPanel = (props) => {
    const classes = useStyles();
    const labels = [{name:'Venue Name', parameter: 'venueName'}, {name: 'Surface Name', parameter: 'surfaceName'}, {name:'Sport', parameter:'sport'}, {name: 'Status', parameter: 'status'}, {name: 'Server Ip', parameter: 'serverIp'}];

    return (
        <div className={classes.root}>
            <List>
                <ListItem style={{paddingBottom: '0px'}}>
              <ListItemText>
                <Typography component="h6" gutterBottom>
                    Details
                </Typography>                  
                </ListItemText>
            </ListItem>
            <Divider style={{backgroundColor: '#fff'}}/>
            {labels.map((label, index) => (
            <ListItem key={label.name} >
              <ListItemText>
                <Typography component="p" gutterBottom style={{fontSize: '0.9rem'}}>
                    {label.name}:
                </Typography><br />
                <Typography component="p" gutterBottom style={{fontSize: '0.9rem'}}>
                    {props.details[label.parameter]}
                </Typography>                 
              </ListItemText>
            </ListItem>))}
            </List>            
        </div>
    );
}

export default DetailsPanel;