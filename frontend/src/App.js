import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import People from './components/People'
import Companies from './components/Companies'
import AboutUs from './components/AboutUs'

const App = () => {

  const [body, setBody] = useState('main')

  if (body === 'main') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <Main />
        </div>
      </div>
    )
  }

  if (body === 'people') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <People />
        </div>
      </div>
    )
  }

  if (body === 'companies') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <Companies />
        </div>
      </div>
    )
  }

  if (body === 'about') {
    return (
      <div className='App'>
        <Navbar setBody={setBody} />
        <div className='Body'>
          <AboutUs />
        </div>
      </div>
    )
  }

}

export default App
