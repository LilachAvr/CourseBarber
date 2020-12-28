import './App.css';
import React from 'react'
import Home from './components/home/home';
// import AboutBarbershop from './components/aboutBarbershop/aboutBarbershop';
import AboutCourse from './components/aboutCourse/aboutCourse';
import SpecialTools from './components/specialTools/specialTools';
import WhatMore from './components/whatMore/whatMore';
import Register from './components/register/register';
import AboutBarbershop from './components/aboutBarbershop/aboutBarbershop';
// import Footer from './components/footer/footer';
// import Navbar from './components/navbar/navbar';

function App() {
  return (
    // <div>
      <div className='App'>
        <Home/>
        {/* <AboutBarbershop/> */}
        <AboutCourse/>
        <SpecialTools/>
        <WhatMore/>
        <AboutBarbershop/>
        <Register/>

      </div>
    // </div>
  );
}

export default App;
