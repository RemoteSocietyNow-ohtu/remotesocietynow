import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PasswordField from '../InputFields/PasswordField'
import EmailField from '../InputFields/EmailField'
import authenticationService from '../../services/authenticationService'

const SignUp = ({ setBody }) => {

  const language = useContext(LanguageContext)

  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signUp = async () => {
    if (password === confirmPassword) {
      setError('')
      const res = await authenticationService.signUp(email, password)
      if (res.error) {
        setError(language.errors.usernameNotUnique)
      } else {
        setError('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setBody('signUpConfirmation')
      }
    } else {
      setError('Passwords do not match.')
    }
  }

  return (
    <div className='Container'>
      <div className='SignUp-container'>
        <h3 className='SignUp-header'>{language.headers.signUpHeader}</h3>
        {error !== '' && <p className='Error'>{error}</p>}
        <div className='SignUp-input-div'>
          <label className='SignUp-label'>{language.content.authenticationLabelEmail}</label>
          <EmailField handleValueChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className='SignUp-input-div'>
          <label className='SignUp-label'>{language.content.authenticationLabelPassword}</label>
          <PasswordField handleValueChange={(event) => setPassword(event.target.value)} value={password} />
        </div>
        <div className='SignUp-input-div'>
          <label className='SignUp-label'>{language.content.authenticationLabelConfirmPassword}</label>
          <PasswordField handleValueChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} />
        </div>
        <button className='SignUp-button' onClick={() => signUp()}>{language.buttons.signUp}</button>
      </div>
    </div>
  )
}

export default SignUp
