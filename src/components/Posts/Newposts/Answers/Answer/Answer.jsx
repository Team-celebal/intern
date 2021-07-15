import { Avatar } from '@material-ui/core';
import React , { useState }from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {IconButton} from '@material-ui/core';
import './Answer.css';
import db from '../../../../../firebase';


function Answer({
  avatar,displayName,image,likes,text,unlikes,id,parentID
}) {
    const [val , setVal]  = useState(1);
   function updateLikes(){
     db.collection('posts').doc(parentID).collection('1').doc(id).update({
       likes:likes+val
     })
     if (val === 1)setVal(-1)
     else setVal(1);
   }

  return (
    <div className="answers">
    <div className="answers__header">
       <Avatar src={avatar}/>
       <h3>{displayName}</h3>
      
    </div>
    <div className="answers__headerSecond">
    <p>{new Date().toUTCString()}</p>
    </div> 
        
    <div className="answers__body">
      <p>{text}</p>
      <img src={image} alt="Answer"/>
    </div>

    <div className="answers__footer">
      <IconButton onClick = {updateLikes} className="likeButton" ><ThumbUpIcon/>{likes}</IconButton>
      <IconButton className="unlikeButton"><ThumbDownIcon />{unlikes}</IconButton>
    </div>

  </div>
  )
}

export default Answer;
