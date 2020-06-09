import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PasswordField from '../InputFields/PasswordField'
import EmailField from '../InputFields/EmailField'

const Login = ({ setBody }) => {

  
  const language = useContext(LanguageContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='Container' >
          <div className='Login-container'>
            <h3 className='Login-header'>{language.headers.loginHeader}</h3>
            <div className='Login-input-div' >
              <label className='Login-label'>{language.content.authenticationLabelEmail}</label>
              <EmailField handleValueChange={(event) => setEmail(event.target.value)} value={email}/>
            </div>
            <div className='Login-input-div' >
              <label className='Login-label'>{language.content.authenticationLabelPassword}</label>
              <PasswordField handleValueChange={(event) => setPassword(event.target.value)} value={password}/>
            </div>
            <button className='LogIn-button' type='submit'>{language.buttons.login}</button>
          </div>
        <p className='Login-create-account' onClick={() => setBody('signIn')}>{language.content.authenticationLoginCreateAccountText}</p>
    </div>
  )
}

export default Login