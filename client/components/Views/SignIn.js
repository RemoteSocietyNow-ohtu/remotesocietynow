import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PasswordField from '../InputFields/PasswordField'
import EmailField from '../InputFields/EmailField'

const SignIn = () => {

  const language = useContext(LanguageContext)

  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signIn = () => {
    if (password === confirmPassword) {
      setError('')
      // sign in
    } else {
      setError('Passwords do not match.')
    }
  }

  return (
    <div className='Container'>
      <div className='SignIn-container'>
      <h3 className='SignIn-header'>{language.headers.signInHeader}</h3>
      {error !== '' && <p className='Error'>{error}</p>}
      <div className='SignIn-input-div'>
        <label className='SignIn-label'>{language.content.authenticationLabelEmail}</label>
        <EmailField handleValueChange={(event) => setEmail(event.target.value)} value={email} />
      </div>
      <div className='SignIn-input-div'>
        <label className='SignIn-label'>{language.content.authenticationLabelPassword}</label>
        <PasswordField handleValueChange={(event) => setPassword(event.target.value)} value={password} />
      </div>
      <div className='SignIn-input-div'>
        <label className='SignIn-label'>{language.content.authenticationLabelConfirmPassword}</label>
        <PasswordField handleValueChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} />
      </div>
      <button className='SignIn-button' onClick={() => signIn()}>{language.buttons.signIn}</button>
      </div>
    </div>
  )
}

export default SignIn
