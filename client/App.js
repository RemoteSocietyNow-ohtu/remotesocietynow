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
import DeletionConfirmation from './components/Views/DeletionConfirmation'

const App = () => {
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)
  const [acceptCookies, setAcceptCookies] = useState(false)
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

  const views = {}

  views['main'] = <Main setBody={setBody} />

  views['signUp'] = <SignUp setBody={setBody} setSuccess={setSuccess} />

  views['login'] = <Login setBody={setBody} activeCalculator={activeCalculator} Cookies={Cookies}
    setSuccess={setSuccess} acceptCookies={acceptCookies} setAcceptCookies={setAcceptCookies} />

  views['admin'] = <Admin Cookies={Cookies} />

  views['privacy-policy'] = <PrivacyPolicy
    setBody={() => setBody('calculatorChoice')} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy}
  />

  views['calculatorChoice'] = <CalculatorChoice
    setBody={setBody}
    setActiveCalculator={setActiveCalculator}
    acceptPrivacyPolicy={acceptPrivacyPolicy}
    setAcceptPrivacyPolicy={setAcceptPrivacyPolicy}
    setCurrentCompanyQuestion={setCurrentCompanyQuestion}
    setCurrentPeopleQuestion={setCurrentPeopleQuestion}
  />

  views['people'] = <Calculator
    setBody={setBody}
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
    Cookies={Cookies}
  />

  views['companies'] = <Calculator
    setBody={setBody}
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
    Cookies={Cookies}
  />

  views['about'] = <AboutUs setBody={setBody} />

  views['gdprCompliance'] = <GDPRCompliance Cookies={Cookies} setBody={setBody} />

  views['deletionConfirmation'] = <DeletionConfirmation Cookies={Cookies} setBody={setBody} />

  return (
    <div className="App">
      <Navbar body={body} setBody={setBody} Cookies={Cookies} />
      {success != '' && <p className='Success'>{success}</p>}
      <div className='Body'>
        {views[body]}
      </div>
    </div>
  )
}

export default App
