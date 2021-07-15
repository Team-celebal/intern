import { Avatar } from '@material-ui/core';
import React from 'react';
import './Pages.css';

function Pages() {
  return (
    <div className="pages">
      <div className="pages__header">
      <Avatar />
      <h2>This is heading</h2>
      </div>
      
      <p>This is description</p>

    </div>
  )
}

export default Pages;
