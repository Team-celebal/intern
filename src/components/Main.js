import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import Newsfeed from './Newsfeed/Newsfeed';

function Main({isClicked}) {
 
  return (
    <div className="app">
    <div className="app__header">
      <Header />
    </div>
   

     <div className="app__content">
       <Sidebar />
       <Posts clicked={isClicked}/>
       <Newsfeed />
     </div>
    
    </div>
  )
}

export default Main;
