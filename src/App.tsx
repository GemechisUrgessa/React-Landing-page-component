import { useState } from 'react'
import './App.css'
import Header from './components/header'
import HomePage from './components/homePage'
import About from './components/about'
import Particle from './components/Particles'
import Services from './components/services'
import Portfolio from './components/portfolio'

function App() {


  return (
    <>

      <Header />
      <main>
        <HomePage />
        <About />
        <Services />
        <Portfolio />
      </main>
    </>
  )
}

export default App
