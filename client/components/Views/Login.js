import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PasswordField from '../InputFields/PasswordField'
import EmailField from '../InputFields/EmailField'
import authenticationService from '../../services/authenticationService'
import CookieCheckbox from '../InputFields/CookieCheckbox'

const Login = ({ setBody, Cookies, activeCalculator, setSuccess, acceptCookies, setAcceptCookies }) => {

  const language = useContext(LanguageContext)
  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const res = await authenticationService.login(email, password)
    setPassword('')
    if (res.token) {
      setEmail('')
      setPassword('')
      setError('')
      Cookies.set('token', res.token, { expires: 7, sameSite: 'lax' })
      setSuccess(language.success.loggedIn)
      setTimeout(() => {
        setSuccess('')
      }, 5000)
      activeCalculator ? setBody(activeCalculator) : setBody('calculatorChoice')
    }
    if (res.adminToken) {
      setError('')
      Cookies.set('adminToken', res.adminToken, { expires: 7, sameSite: 'lax' })
      setBody('admin')
    }
    if (res.error) {
      setError(language.errors.invalidCredentials)
    }
  }

  return (
    <div className='Container' >
      <div className='Login-container'>
        <h3 className='Login-header'>{language.headers.loginHeader}</h3>
        {error !== '' && <p className='Error'>{error}</p>}
        <div className='Login-input-div' >
          <label className='Login-label'>{language.content.authenticationLabelEmail}</label>
          <EmailField handleValueChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className='Login-input-div' >
          <label className='Login-label'>{language.content.authenticationLabelPassword}</label>
          <PasswordField handleValueChange={(event) => setPassword(event.target.value)} value={password} />
        </div>
        <CookieCheckbox
          checked={acceptCookies} setChecked={() => setAcceptCookies(!acceptCookies)} />
        <button className='LogIn-button' type='submit' disabled={!acceptCookies} onClick={() => login()}>{language.buttons.login}</button>
      </div>
      <p className='Login-create-account' onClick={() => setBody('signUp')}>{language.content.authenticationLoginCreateAccountText}</p>
    </div>
  )
}

export default Login