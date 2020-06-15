import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import Main from './components/Views/Main'
import AboutUs from './components/Views/AboutUs'
import GDPRCompliance from './components/Views/GDPRCompliance'
import PrivacyPolicy from './components/Views/PrivacyPolicy'
import CalculatorChoice from 'Components/Views/CalculatorChoice'
import SignUp from './components/Views/SignUp'
import Login from './components/Views/Login'
import Admin from './components/Views/Admin'
import Cookies from 'js-cookie'
import Calculator from 'Components/SubComponents/Calculator/Calculator'

const App = () => {
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)
  const [body, setBody] = useState('main')
  const [activeCalculator, setActiveCalculator] = useState(null)

  const [peopleQuestions, setPeopleQuestions] = useState([]) // Questions that are presented to user.
  const [peopleAnswers, setPeopleAnwers] = useState({}) // Values of question fields
  const [peopleResults, setPeopleResults] = useState({}) // Results that are recieved from backend after sending values
  const [currentPeopleQuestion, setCurrentPeopleQuestion] = useState(0) // Current question index 

  const [companyQuestions, setCompanyQuestions] = useState([]) // Questions that are presented to user.
  const [companyAnswers, setCompanyAnwers] = useState({}) // Values of question fields
  const [companyResults, setCompanyResults] = useState({}) // Results that are recieved from backend after sending values
  const [currentCompanyQuestion, setCurrentCompanyQuestion] = useState(0) // Current question index

  const [success, setSuccess] = useState('')
 
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
          <Login setBody={setBody} activeCalculator={activeCalculator} Cookies={Cookies} setSuccess={setSuccess} />
        </div>
      </div>
    )
  }

  if (body === 'admin') {
    if (Cookies.get('adminToken')) {
      return (
        <div className="App">
          <Navbar body={body} setBody={setBody} Cookies={Cookies} />
          <div className='Body'>
            <Admin Cookies={Cookies} />
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
          {success != '' && <p className='Success'>{success}</p>}
          <CalculatorChoice 
            setBody={setBody}
            setActiveCalculator={setActiveCalculator}
            acceptPrivacyPolicy={acceptPrivacyPolicy}
            setAcceptPrivacyPolicy={setAcceptPrivacyPolicy} 
            setCurrentCompanyQuestion={setCurrentCompanyQuestion}
            setCurrentPeopleQuestion={setCurrentPeopleQuestion}
          />
        </div>
      </div>
    )
  }

  if (body === 'people') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <Calculator 
            questions={peopleQuestions}
            setQuestions={setPeopleQuestions}
            answers={peopleAnswers}
            setAnwers={setPeopleAnwers}
            results={peopleResults}
            setResults={setPeopleResults}
            currentQuestion={currentPeopleQuestion}
            setCurrentQuestion={setCurrentPeopleQuestion}
            login={() => setBody('login')}
            signUp={() => setBody('signUp')}
            success={success}
          />          
        </div>
      </div>
    )
  }

  if (body === 'companies') {
    return (
      <div className="App">
        <Navbar body={body} setBody={setBody} Cookies={Cookies} />
        <div className='Body'>
          <Calculator 
            questions={companyQuestions}
            setQuestions={setCompanyQuestions}
            answers={companyAnswers}
            setAnwers={setCompanyAnwers}
            results={companyResults}
            setResults={setCompanyResults}
            currentQuestion={currentCompanyQuestion}
            setCurrentQuestion={setCurrentCompanyQuestion}
            login={() => setBody('login')}
            signUp={() => setBody('signUp')}
            isCompany={true}
            success={success}
          />
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
