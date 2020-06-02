import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import Main from './components/Views/Main'
import AboutUs from './components/Views/AboutUs'
import GDPRCompliance from './components/Views/GDPRCompliance'
import PrivacyPolicy from './components/Views/PrivacyPolicy'
import People from 'Components/Views/People'
import Companies from 'Components/Views/Companies'
import CalculatorChoice from 'Components/Views/CalculatorChoice'

const App = () => {
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)
  const [body, setBody] = useState('main')

  if (body === 'main') {
    return (
      <div className="App">
        <Navbar setBody={setBody}/>
        <div className='Body'>
          <Main setBody={setBody}/>         
        </div>
      </div>
    )
  }

  if (body === 'privacy-policy') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <PrivacyPolicy setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />
        </div>
      </div>
    )
  }

  if (body === 'calculatorChoice') {
    return (
      <div className='App'>
        <Navbar setBody={setBody} />
        <div className='Body'>
          <CalculatorChoice setBody={setBody} acceptPrivacyPolicy={acceptPrivacyPolicy} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />         
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

  if (body === 'gdprCompliance') {
    return (
      <div className='App'>
        <Navbar setBody={setBody} />
        <div className='Body'>
          <GDPRCompliance />          
        </div>
      </div>
    )
  }

}

export default App
