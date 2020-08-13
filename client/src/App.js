import React from 'react';
import Home from './components/Home';
import AboutBarbershop from './components/aboutBarbershop';
import AboutCourse from './components/aboutCourse';
// import Footer from './components/footer';
import Tools from './components/specialTools';
import Register from './components/register';
import WhatMore from './components/whatMore';

function App() {
  return (
    <div className="barberCourse">
      <Home/>
      <AboutBarbershop/>
      <AboutCourse/>
      <Tools/>
      <WhatMore/>
      <Register/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
