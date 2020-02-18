import React from 'react';
import './App.css';
import NavigationBar from './components/navbar.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/homepage.js'
import AboutPage from './components/about.js'
import FeaturesPage from './components/features'


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Router basename={process.env.PUBLIC_URL+'/'}>
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/features' component={FeaturesPage} />
          <Route component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
