import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home'
import Report from './pages/Report'
import Products from './pages/Products'

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Report} />
             <Route path='/products' component={Products} />
          </Switch>
      </Router>

      </>
    );
  }
}

export default App;
