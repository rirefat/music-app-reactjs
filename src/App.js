import React from 'react';
import './App.css';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div className='App text-white overflow-hidden'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Experience></Experience>
      <Search></Search>
    </div>
  );
};

export default App;