import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
            {/* <Home /> */}
          <Route path="/portfolio" component={Portfolio} />
            {/* <Portfolio /> */}
          <Route path="/contact" component={Contact} />
            {/* <Contact /> */}
          <Route path="/resume" component={Resume} />
            {/* <Resume /> */}

        </Switch>

        <Footer />
      </div>
    </Router>    
  );
}

export default App
