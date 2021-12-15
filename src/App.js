import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import content from './Data/Content';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Hooks/ScrollToTop';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import RulesandRegulation from './Pages/RulesandRegulation';
function App() {
  useEffect(() => {
    Aos.init({duration:1000}); 
  }, [])
  return (
    
      <Router>
      <div className="App">
      {/* <GlobalStyle/> */}
      <Navbar/>
      <ScrollToTop/>
      {/* <ScrollToTop/>  */}
          <Switch>
            <Route exact path="/">
              <div>
                <Home Covertext={content[0]}/>
              </div>
            </Route>
            <Route exact path="/rules">
              <div>
                <RulesandRegulation Covertext={content[1]}/>
              </div>
            </Route>
          </Switch>
          <Footer />
          {/* <Footer/> */}
      </div>
    </Router>
    
  );
}

export default App;
