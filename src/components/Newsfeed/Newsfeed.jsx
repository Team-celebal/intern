import React from 'react';
import './Newsfeed.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DoneIcon from '@material-ui/icons/Done';
import Pages from './Pages/Pages';

function Newsfeed() {    
  return ( 
    <div className="newsfeed">
     <div className="newsfeed__improve">
       
     <h2>Improve Your Feed</h2>
      <p id="line"><DoneIcon />Visit your feed</p>
      <p><CheckBoxOutlineBlankIcon />Follow 4 more Spaces</p>
      <p><CheckBoxOutlineBlankIcon />Upvote 5 more good pieces of content</p>
      <p id="line"><DoneIcon />Ask a question</p>
      <p><CheckBoxOutlineBlankIcon />Add 2 credentials about where you live, work or study</p>
      <p><CheckBoxOutlineBlankIcon />Answer a question</p>
     </div>

     <div className="newsfeed__spaces">
       <h2>Spaces to follow</h2>
       <Pages />
       <Pages />
       <Pages />
     </div>

      
    </div>
  )
}

export default Newsfeed;
