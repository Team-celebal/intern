import { Avatar,Button } from '@material-ui/core';
import React , { useState } from 'react';    
import './PostsHeader.css';
import db from '../../../firebase';
   
function PostsHeader() {
  const [postText,setPostText] = useState('');
  const [postImage,setPostImage] = useState('');
  const [postHeading,setPostHeading] = useState('');
   
   const sendPost = (event) =>{
    event.preventDefault();


    
    db.collection('posts').add({
      displayName:"Rahul Sharma",
      text:postText,
      image:postImage,
      avatar:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-cena-1609921224.jpg?crop=0.717xw:1.00xh;0.126xw,0&resize=480:*",
      ansby:"Elias",
      heading:postHeading,
      timeStamp:new Date().toUTCString(),
      likes:0,
      unlikes:0,
      id:""
    }).then((docRef)=>db.collection('posts').doc(docRef.id).id=docRef.id).catch((err)=>console.error(err));
  
    setPostText("");
    setPostImage("");
    setPostHeading("");
   }
 


  return (
    <div className="posts">
     <div className="posts__header">
     <div className="posts__headerProfile">   
     <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-cena-1609921224.jpg?crop=0.717xw:1.00xh;0.126xw,0&resize=480:*"/>
     <h3>Rahul Yadav</h3>
     </div>
     <input value={postHeading} onChange={ e => setPostHeading(e.target.value)} placeholder="What's your question ?"/>
     <input value={postText} onChange={ e => setPostText(e.target.value)} placeholder="Enter description?"/>
     <input value={postImage} onChange= { e => setPostImage(e.target.value)} placeholder="Link"/>

     <Button  className="posts__headerButton" onClick={sendPost} type="submit">Post</Button>
     </div>
      
                    
    </div>
  )
}

export default PostsHeader;
