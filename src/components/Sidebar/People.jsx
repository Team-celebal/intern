import React ,{ useEffect,useState } from 'react';
import { Avatar } from '@material-ui/core';
import './People.css';

function People({name}) {
  const [randomString,setRandomString] = useState('');

  useEffect(()=>{ 
   setRandomString(Math.floor(Math.random()*5000));
  },[])
  return (
    <div className="people">
      <Avatar src={`https://avatars.dicebear.com/api/male/${randomString}.svg`}/>
      <h3>{name}</h3>
    </div>
  )
}

export default People;
