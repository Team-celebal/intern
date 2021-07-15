import React,{ useState } from 'react';
import './NewAnswer.css';
import { Avatar,Button } from '@material-ui/core';
import db from '../../../../../firebase';

function NewAnswer({id}) {
  const [postText,setPostText] = useState('');
  const [postImage,setPostImage] = useState('');
   
   const sendPost = (event) =>{
    event.preventDefault();


    
    db.collection('posts').doc(id).collection('1').add({
      displayName:"Rahul Yadav",
      text:postText,
      image:postImage,
      avatar:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-cena-1609921224.jpg?crop=0.717xw:1.00xh;0.126xw,0&resize=480:*",
      ansby:"Elias",
      timeStamp: new Date().toUTCString(),
      likes:0,
      unlikes:0,
      
    }).then((docRef)=>db.collection('posts').doc(docRef.id).id=docRef.id).catch((err)=>console.error(err));
  
    setPostText("");
    setPostImage("");
   
   }
 


  return (
    <div className="newanswer">
     <div className="newanswer__header">
     <div className="newanswer__headerProfile">   
     <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-cena-1609921224.jpg?crop=0.717xw:1.00xh;0.126xw,0&resize=480:*"/>
     <h3>Rahul Sharma</h3>
     </div>
    
     <input value={postText} onChange={ e => setPostText(e.target.value)} placeholder="Enter your answer"/>
     <input value={postImage} onChange= { e => setPostImage(e.target.value)} placeholder="Link"/>

     <Button  className="newanswer__headerButton" onClick={sendPost} type="submit">Post</Button>
     </div>
      
                    
    </div>
  )
  
}

export default NewAnswer;
