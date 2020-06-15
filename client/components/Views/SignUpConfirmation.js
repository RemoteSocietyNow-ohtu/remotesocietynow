import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const SignUpConfirmation = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='SignUpConfirmation-container'>
        <p>You have succesfully registered, would you like to continue to the login screen?</p>
        <button className='SignUpConfirmation-button' onClick={() => setBody('login')}>Login now</button>
      </div>
    </div>
  )
}

export default SignUpConfirmation