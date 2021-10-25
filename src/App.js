import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home.js'
import Products from './components/Pages/Products.js'
import Services from './components/Pages/Services.js'
import SignUp from './components/Pages/SignUp.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
