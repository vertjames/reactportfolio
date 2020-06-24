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
    <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />

        </Switch>

        <Footer />
    </Router>    
  );
}

export default App
