import React from 'react';
import './App.css';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  return (
    <div className='App text-white overflow-hidden'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Experience></Experience>
    </div>
  );
};

export default App;