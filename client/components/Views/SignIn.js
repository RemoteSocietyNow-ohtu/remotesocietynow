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
      <h3>{language.headers.signInHeader}</h3>
      {error !== '' && <p className='Error'>{error}</p>}
      <label className='SignIn-label'>{language.content.signInLabelEmail}</label>
      <EmailField handleValueChange={(event) => setEmail(event.target.value)} value={email} />
      <label className='SignIn-label'>{language.content.signInLabelPassword}</label>
      <PasswordField handleValueChange={(event) => setPassword(event.target.value)} value={password} />
      <label className='SignIn-label'>{language.content.signInLabelConfirmPassword}</label>
      <PasswordField handleValueChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} />
      <button className='SignIn-button' onClick={() => signIn()}>{language.buttons.signIn}</button>
    </div>
  )
}

export default SignIn
