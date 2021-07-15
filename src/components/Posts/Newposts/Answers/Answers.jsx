import Header from '../../../Header/Header';
import React , { useState, useEffect } from 'react';

import db from '../../../../firebase';

import Answer from './Answer/Answer';
import './Answers.css';
import NewAnswer from './NewAnswer/NewAnswer';
import {Button } from '@material-ui/core';


function Answers({id}) {
   const [answers,setAnswers]  = useState([]);
  useEffect(() => (
    db.collection('posts').doc(id).collection('1').onSnapshot( snapshot => (
      setAnswers(snapshot.docs.map( doc => {
        return {...doc.data(),id:doc.id};
      }))
    ))
  ),[id])

  function compare(a,b){
    if (a.likes>b.likes) return -1;
    if (a.likes < b.likes) return 1;
    return 0;
  }
  
  function Sort(){
    // const arr = [...answers];
    // arr.sort(compare);
    setAnswers([...answers].sort(compare));
  }

  console.log(answers);
  return (
     <div className="answers__RealHeader">
       <Header />
       
     <div className="answers__page">
     <NewAnswer id={id}/>
      <Button onClick ={Sort} className="answers__pageButton">Sort</Button>
     { 
       answers.map((answer,index) =>(
         <Answer key={index}
         avatar={answer.avatar}
         displayName={answer.displayName}
         image={answer.image}
         likes={answer.likes}
         text={answer.text}
         unlikes={answer.unlikes}
         id={answer.id}
         parentID={id}
         />
       ))
     }
  </div>
     </div>

   
  )
}

export default Answers;
