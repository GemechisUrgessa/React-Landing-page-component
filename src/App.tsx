import { useState } from 'react'
import './App.css'
import Header from './components/header'
import HomePage from './components/homePage'
import About from './components/about'

function App() {


  return (
    <>
      <Header />
      <main>
        <HomePage />
        <About />
      </main>
    </>
  )
}

export default App
