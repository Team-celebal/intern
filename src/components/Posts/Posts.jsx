import React ,{ useState,useEffect } from 'react';
import PostsHeader from './PostsHeader/PostsHeader';
import './Posts.css';
import './Newposts/Newposts';
import Newposts from './Newposts/Newposts';
import db from '../../firebase';


function Posts({clicked}) {
 const [posts, setPosts] = useState([]);
   

 useEffect(() => {
  db.collection('posts').onSnapshot( snapshot => {
    setPosts(snapshot.docs.map(doc => {
      return {...doc.data(),id:doc.id};
    })); 
  })   
  },[]);
  return (
    <div className="posts">
    <PostsHeader/>
     
    {
      posts.map( post => (
        <Newposts 
        key={post.id}
          avatar={post.avatar}
          displayName={post.displayName}
          ansby={post.ansby}
          timeStamp={post.timeStamp}
          heading={post.heading}
          text={post.text}
          image={post.image}
          likes={post.likes}
          unlikes={post.unlikes}
          id={post.id}
          onClicked={clicked}
        />
      ))
    }
    
    
    
  </div>
    
  )
}

export default Posts;
