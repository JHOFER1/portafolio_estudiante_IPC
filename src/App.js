import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
//import About from './components/About';
import Skills from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-sky-900 to-sky-600 overflow-hidden'>
      <Header/>
      <Banner/>
      <Nav/>
      {/* <About/> */}
      <Skills/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;
