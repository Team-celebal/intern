import React from 'react';
import './Input.css';
import SearchIcon from '@material-ui/icons/Search';

function Input() {
  return (
    <div className="input__search">
    <SearchIcon className="input__searchIcon"/>
      <input placeholder="Search" type="text"/>
    </div>
  )
}

export default Input;
