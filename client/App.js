import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import Main from './components/Views/Main'
import AboutUs from './components/Views/AboutUs'
import GDPRCompliancy from './components/Views/GDPRCompliancy'
import PrivacyPolicyBar from './components/SubComponents/PrivacyPolicyBar'
import PrivacyPolicy from './components/Views/PrivacyPolicy'
import People from 'Components/Views/People'
import Companies from 'Components/Views/Companies'
import CalculatorChoice from 'Components/Views/CalculatorChoice'

const App = () => {

  const [body, setBody] = useState('main')
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)

  if (body === 'main') {
    return (
      <div className="App">
        <Navbar setBody={setBody}/>
        <div className='Body'>
          <Main setBody={setBody}/>
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />}
        </div>
      </div>
    )
  }

  if (body === 'privacy-policy') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <PrivacyPolicy setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} setBody={setBody} />
        </div>
      </div>
    )
  }

  if (body === 'calculatorChoice') {
    return (
      <div className='App'>
        <Navbar setBody={setBody} />
        <div className='Body'>
          <CalculatorChoice setBody={setBody} />
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />}
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
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />}
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
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />}
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
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />}
        </div>
      </div>
    )
  }

  if (body === 'gdprCompliancy') {
    return (
      <div className='App'>
        <Navbar setBody={setBody} />
        <div className='Body'>
          <GDPRCompliancy />
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />}
        </div>
      </div>
    )
  }

}

export default App
