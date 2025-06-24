import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Welcome from './components/welcome/Welcome'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Contact  from './components/contact/Contact'
import About from './components/about/About'
import Resume from './components/resume/Resume'


function App() {

  return (
    <>
    <Sidebar />
    <main className='main'>
    <Welcome />
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
    </main>
    
    
    </>
  )
}

export default App
