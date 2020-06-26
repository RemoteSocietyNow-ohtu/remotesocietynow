import React, { useState, useContext } from 'react'
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
import LanguageContext from './Contexts/LanguageContext'


import {
  Switch, Route, useHistory
} from 'react-router-dom'

const App = () => {
  const language = useContext(LanguageContext)
  document.documentElement.lang = language.code

  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)
  const [acceptCookies, setAcceptCookies] = useState(false)
  const [body] = useState('main')
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

  const history = useHistory()

  const setView = (view) => {
    history.push(`/${view}`)
  }

  views['main'] = <Main setBody={setView} />

  views['signUp'] = <SignUp setBody={setView} setSuccess={setSuccess} />

  views['login'] = <Login setBody={setView} activeCalculator={activeCalculator} Cookies={Cookies}
    setSuccess={setSuccess} acceptCookies={acceptCookies} setAcceptCookies={setAcceptCookies} />

  views['admin'] = <Admin Cookies={Cookies} />

  views['privacy-policy'] = <PrivacyPolicy
    setBody={() => setView('calculatorChoice')} setAcceptPrivacyPolicy={setAcceptPrivacyPolicy}
  />

  views['calculatorChoice'] = <CalculatorChoice
    setBody={setView}
    setActiveCalculator={setActiveCalculator}
    acceptPrivacyPolicy={acceptPrivacyPolicy}
    setAcceptPrivacyPolicy={setAcceptPrivacyPolicy}
    setCurrentCompanyQuestion={setCurrentCompanyQuestion}
    setCurrentPeopleQuestion={setCurrentPeopleQuestion}
  />

  views['people'] = <Calculator
    setBody={setView}
    questions={peopleQuestions}
    setQuestions={setPeopleQuestions}
    answers={peopleAnswers}
    setAnwers={setPeopleAnwers}
    results={peopleResults}
    setResults={setPeopleResults}
    currentQuestion={currentPeopleQuestion}
    setCurrentQuestion={setCurrentPeopleQuestion}
    login={() => setView('login')}
    signUp={() => setView('signUp')}
    Cookies={Cookies}
  />

  views['companies'] = <Calculator
    setBody={setView}
    questions={companyQuestions}
    setQuestions={setCompanyQuestions}
    answers={companyAnswers}
    setAnwers={setCompanyAnwers}
    results={companyResults}
    setResults={setCompanyResults}
    currentQuestion={currentCompanyQuestion}
    setCurrentQuestion={setCurrentCompanyQuestion}
    login={() => setView('login')}
    signUp={() => setView('signUp')}
    isCompany={true}
    Cookies={Cookies}
  />

  views['about'] = <AboutUs setBody={setView} />

  views['gdprCompliance'] = <GDPRCompliance Cookies={Cookies} setBody={setView} />

  views['deletionConfirmation'] = <DeletionConfirmation Cookies={Cookies} setBody={setView} />

  return (
    <div className="App">
      <Navbar body={body} setBody={setView} Cookies={Cookies} />
      {success != '' && <p className='Success'>{success}</p>}
      <div className='Body'>
        <Switch>
          <Route path='/login'>
            {views['login']}
          </Route>
          <Route path='/signUp'>
            {views['signUp']}
          </Route>
          <Route path='/admin'>
            {views['admin']}
          </Route>
          <Route path='/privacy-policy'>
            {views['privacy-policy']}
          </Route>
          <Route path='/calculatorChoice'>
            {views['calculatorChoice']}
          </Route>
          <Route path='/people'>
            {views['people']}
          </Route>
          <Route path = '/companies'>
            {views['companies']}
          </Route>
          <Route path='/about'>
            {views['about']}
          </Route>
          <Route path = '/gdprCompliance'>
            {views['gdprCompliance']}
          </Route>
          <Route path = '/deletionConfirmation'>
            {views['deletionConfirmation']}
          </Route>
          <Route path='/'>
            {views['main']}
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
