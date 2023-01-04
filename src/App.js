import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  return (
    <div className='App text-white overflow-hidden'>
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  );
};

export default App;