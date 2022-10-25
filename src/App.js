import logo from './logo.svg';
import './App.css';
import Test from './test';
import Home from './home/home';
import Login from './Login/login';
import {Link, Route,Router,Routes}from 'react-router-dom'
import React  from 'react';
import Pagenotfound from './pagenotFound/pagenotfound';
import Dashboard from './dashboard/dashboard';
function App() {
  return (
   <>
   <nav>
    <ul>
        <li><Link to={'/'}> Home</Link></li>
        <li><Link to={'Login'}> Login</Link> </li>
        <li><Link to={'/Test'}> Test </Link> </li>
        <li><Link to={'Home'}> Home</Link></li>
    </ul>
   </nav>
    <Routes>
       <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Test' element={ <Test />} />
      <Route path='/Dashboard' element={ <Dashboard />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
  
 
    </>
  
   
 
  
  );
}

export default App;
 