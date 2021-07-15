import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Input from './Input/Input';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar,Button, IconButton } from '@material-ui/core';

import './Header.css';
function Header() {
  return (
    <div className="headerPart">
    <div className="headerArea">
      <h1>Q&A Forum</h1>
       <div className="headerArea__icons">
       <IconButton><HomeIcon /></IconButton>
       <IconButton><ListAltIcon /></IconButton>
       <IconButton><CreateIcon /></IconButton>
       <IconButton><PeopleOutlineIcon /></IconButton>
       <IconButton><NotificationsNoneIcon /></IconButton>
          
                       
       </div>
       <Input />
       <div className="headerArea__iconsRight">
       <Avatar src=""/>
       <LanguageIcon className="languageIcon"/>
       <Button className="headerArea__Button">ADD QUESTION</Button>

       </div>

    </div>
    
       


     
    </div>
  )
}

export default Header;
