import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
