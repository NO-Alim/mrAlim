import {useState, useEffect} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import SideScroller from './component/SideScroller';
import SocialMedia from './component/SocialMedia';
import Home from './pages/Home';


function App() {

  const [customLoading, setCustomLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setCustomLoading(false);
    }, 2000);
  })

  if (customLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <SideScroller />
        <SocialMedia />
      </Router>
    </div>
  );
}

export default App;
