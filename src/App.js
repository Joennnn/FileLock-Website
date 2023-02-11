import React from 'react'
import { Header, Features, Footer, WhatFL, Members } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="gradient__bg">
      <div className="gradient__header">
        <Navbar />
        <Header />
      </div>

      <WhatFL />
      <Features />
      <Members />
      <Footer />
      
    </div>
  )
}

export default App
