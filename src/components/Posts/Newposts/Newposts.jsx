/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Newposts.css';
import { Avatar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import db from '../../../firebase';
import { NavLink } from 'react-router-dom';


function Newposts({
  avatar,displayName,ansby,timeStamp,heading,text,image,likes,unlikes,id,onClicked
}) {
    function updateLike(){
  db.collection('posts').doc(id).update({
    likes:likes+1,
  })
    }

    function deletePost(){
      db.collection('posts').doc(id).delete();
    }
    
    function fun(e){
      e.preventDefault();
      onClicked(id);
    } 



    
  return (
    <div className="newsposts">
      <div className="newsposts__header">
      <Avatar src={avatar}/>
      <h3>{displayName}</h3>
      <a href="www.google.com">Follow</a>
      
      <div className="newsposts__headerCloseIcon">
        <IconButton onClick={deletePost}><CloseIcon /></IconButton>
        
      </div>
      </div>

      <div className="newsposts__secondHeader">
      <p>{ansby} {timeStamp}</p>
      
      </div>

      <div className="newsposts__body">
      <h3>{heading}</h3>
    <p>{text}</p>
        <img src={image} alt="This is image"/>
      </div>
       

      <div className="newsposts__footer">
         
         <IconButton className="likeButton" onClick={updateLike}><ThumbUpIcon/>{likes}</IconButton>
         <IconButton className="unlikeButton"><ThumbDownIcon />{unlikes}</IconButton>
        
       
       <IconButton><AutorenewIcon /></IconButton>
       <IconButton onClick={fun}><NavLink to={`/answers/${id}`}><CommentIcon /></NavLink></IconButton>
       
       
       <div className="newsposts__footerShareIcon">     
        
         <IconButton> <ShareIcon /></IconButton>
         <IconButton><MoreHorizIcon /></IconButton>
       </div>
       
       
      
      </div>
      
    </div>
  )
}

export default Newposts;
