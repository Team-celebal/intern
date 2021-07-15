import React from 'react';
import './Sidebar.css';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import People from './People';
import ExploreIcon from '@material-ui/icons/Explore';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__createSpace">
      <Button className="sidebar__button">
      <AddIcon />
      {" "}Create Space
      </Button>
      
      </div>
      
      <div className="sidebar__peoples">
       <People name="John Cena" />
       <People name="Vin Diesel" />
       <People name="WWE" />
       <People name="Dwayne Johnson" />
       <People name="Elias" />
       <People name="Drew McIntyre" />
       <People name="AJ" />
      
      </div>

      <div className="sidebar__footer">
        <Button className="sidebar__footerButton">
        <ExploreIcon />
        Discover Spaces
        </Button>
      </div>
      
     

      
    </div>
  )
}

export default Sidebar;
