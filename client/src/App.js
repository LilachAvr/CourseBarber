import './App.css';
import React from 'react'
import Home from './components/home/home';
// import AboutBarbershop from './components/aboutBarbershop/aboutBarbershop';
import AboutCourse from './components/aboutCourse/aboutCourse';
import SpecialTools from './components/specialTools/specialTools';
import WhatMore from './components/whatMore/whatMore';
import Register from './components/register/register';
import AboutBarbershop from './components/aboutBarbershop/aboutBarbershop';
import About from './components/aboutCourse/about';
// import Footer from './components/footer/footer';
// import Navbar from './components/navbar/navbar';

function App() {
  return (
    // <div>
      <section className='App'>
        <Home/>
        {/* <AboutBarbershop/> */}
        {/* <AboutCourse/> */}
        <About/>
        <SpecialTools/>
        <WhatMore/>
        <AboutBarbershop/>
        <Register/>

      </section>
    // </div>
  );
}

export default App;
