import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home'
import Report from './pages/Report'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';


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
            <Route path='/productdetails' component={ProductDetail} />
          </Switch>
      </Router>

      </>
    );
  }
}

export default App;
