import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles} from '@material-ui/core';

const useClasses = makeStyles({
    tabs: {
        backgroundColor: '#fff',
        boxShadow: 'none',
        paddingTop: '0px',
        color: 'black',
        '&$selected': {
            backgroundColor: 'red',
            color: 'white',
        }
    },
    indicator: {
        backgroundColor: '#1769aa'
    },
    tabActive: {
        border: '2px solid #1769aa',
        borderBottom: 'none',
        borderRadius: '2px',
        color:'#1769aa'
    },
    tab: {        
        margin: '0px 0px',
        '&:hover': {
            backgroundColor: '#fff'
        }
    }
});


const DataTabs = (props) => {
    const classes = useClasses();
    const tabs = [{tabId: 'surfaces', name: 'Surfaces'}, {tabId: 'servers', name: 'Servers'}]

    return(
        <AppBar position="static">
            <Tabs classes={{indicator: classes.indicator, root:classes.tabs}} value={props.tabId} onChange={(event, value) => props.handleChange(event, value)} aria-label="simple tabs example">
                {tabs.map(tab => <Tab key={tab.tabId} classes={{root: classes.tab}} id={tab.tabId} value={tab.tabId} className={props.tabId === tab.tabId ? classes.tabActive : null}  label={tab.name} />)}
            </Tabs>
        </AppBar> 
    );
}

export default DataTabs;