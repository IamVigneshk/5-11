import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import UnderDevelopment from './components/UnderDevelopment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Services />
                <About />
              </>
            } />
            <Route path="/admindash" element={<UnderDevelopment />} />
            <Route path="/userdash" element={<UnderDevelopment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;