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
import SignUp from './components/Views/SignUp'
import Login from './components/Views/Login'
import Admin from './components/Views/Admin'
import Cookies from 'js-cookie'

const App = () => {
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)
  const [body, setBody] = useState('main')

  const [saveToDatabase, setSaveToDatabase] = useState(true)

  if (body === 'main') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <Main setBody={setBody} />
        </div>
      </div>
    )
  }

  if (body === 'signUp') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <SignUp setBody={setBody} />
        </div>
      </div>
    )
  }


  if (body === 'login') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <Login setBody={setBody} Cookies={Cookies} />
        </div>
      </div>
    )
  }

  if (body === 'admin') {
    // admin access control (NOT DONE)
    if (Cookies.get('admin_token')) {
      return (
        <div className="App">
          <Navbar body={body} setBody={setBody} Cookies={Cookies} />
          <div className='Body'>
            <Admin saveToDatabase={saveToDatabase} setSaveToDatabase={setSaveToDatabase} />
          </div>
        </div>
      )
    }
  }

  if (body === 'privacy-policy') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <PrivacyPolicy setBody={() => setBody('calculatorChoice')} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />
        </div>
      </div>
    )
  }

  if (body === 'calculatorChoice') {
    return (
      <div className='App'>
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <CalculatorChoice setBody={setBody} acceptPrivacyPolicy={acceptPrivacyPolicy} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} />
        </div>
      </div>
    )
  }

  if (body === 'people') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <People login={() => setBody('login')} signUp={() => setBody('signUp')} />
        </div>
      </div>
    )
  }

  if (body === 'companies') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <Companies login={() => setBody('login')} signUp={() => setBody('signUp')} />
        </div>
      </div>
    )
  }

  if (body === 'about') {
    return (
      <div className='App'>
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <AboutUs />
        </div>
      </div>
    )
  }

  if (body === 'gdprCompliance') {
    return (
      <div className='App'>
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <GDPRCompliance setBody={() => setBody('main')} />
        </div>
      </div>
    )
  }

}

export default App
