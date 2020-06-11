import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PasswordField from '../InputFields/PasswordField'
import EmailField from '../InputFields/EmailField'
import authenticationService from '../../services/authenticationService'

const Login = ({ setBody, Cookies }) => {

  const language = useContext(LanguageContext)
  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const res = await authenticationService.login(email, password)
    setEmail('')
    setPassword('')
    if (res.token) {
      setError('')
      Cookies.set('token', res.token, { expires: 7 })
      setBody('calculatorChoice')
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
        <button className='LogIn-button' type='submit' onClick={() => login()}>{language.buttons.login}</button>
      </div>
      <p className='Login-create-account' onClick={() => setBody('signUp')}>{language.content.authenticationLoginCreateAccountText}</p>
    </div>
  )
}

export default Login