import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Answers from './components/Posts/Newposts/Answers/Answers';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [urlString , setUrlString] = useState('');
   function handleClick(id){
     console.log('handleclick');
       setUrlString(id);
   }

  return (
    <Router>
    <Switch>
    
     <Route exact path="/" component={() => <Main isClicked={handleClick}/>}/>
     <Route exact path={`/answers/${urlString}`} component={() => <Answers id={urlString}/>}/>
   </Switch>
 </Router>
  );
}

export default App;
