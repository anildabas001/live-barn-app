import React, {useState} from 'react';
import SideDrawer from './Components/SideDrawer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import EmptyPage from './Containers/EmptyPage';
import DataPage from './Containers/DataPage';
import './App.css';

function App() {
  const [openDrawer, updateDrawerState] = useState(true);
  const [component, changeComponent] = useState({
    component: EmptyPage,
    id: 'emptyPage'
  });

  const componentHandler = (event, componentId) => {
    const componentObj = {};

    if(componentId === 'emptyPage') {      
      componentObj.component = EmptyPage;
      componentObj.id = 'emptyPage' 
    }
    else {
      componentObj.component = DataPage;
      componentObj.id = 'dataPage'
    }

    changeComponent({...componentObj});
  }

  const openDrawerHandler = () => {
    updateDrawerState(true);
  }

  const closeDrawerHandler = () => {
    updateDrawerState(false);
  }

  return (
    <div style={{display: 'flex'}}>
      <Header shiftHeader = {openDrawer} openDrawerHandler = {openDrawerHandler} />
      <SideDrawer open={openDrawer} closeDrawerHandler={closeDrawerHandler} componentHandler={componentHandler} selectedComponent={component.id} />
      <MainContent open={openDrawer} >      
        <component.component />
      </MainContent>
    </div>
  );
}

export default App;
