import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import People from './components/People'
import Companies from './components/Companies'
import AboutUs from './components/AboutUs'
import GDPRCompliancy from './components/GDPRCompliancy'
import PrivacyPolicyBar from './components/PrivacyPolicyBar'
import PrivacyPolicy from './components/PrivacyPolicy'

const App = () => {

  const [body, setBody] = useState('main')
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)

  if (body === 'main') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <Main />
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} />}
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

  if (body === 'people') {
    return (
      <div className="App">
        <Navbar setBody={setBody} />
        <div className='Body'>
          <People />
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} />}
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
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} />}
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
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} />}
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
          {!acceptPrivacyPolicy && <PrivacyPolicyBar setBody={setBody} />}
        </div>
      </div>
    )
  }

}

export default App
