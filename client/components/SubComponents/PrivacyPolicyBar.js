import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const PrivacyPolicyBar = ({ setBody, setAcceptPrivacyPolicy }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='PrivacyPolicyBar'>
      <div className='Inline'>
        <span>{language.content.privacyPolicyBar}</span>
        <span className='CalculatorChoice-privacy-policy-link' onClick={() => setBody('privacy-policy')}>{language.headers.privacyPolicy}</span>
        <span>.</span>
      </div>
      <br></br>
      <button className='Button-privacyPolicyBar' onClick={() => setAcceptPrivacyPolicy(true)}>{language.buttons.accept}</button>
    </div>
  )
}

export default PrivacyPolicyBar
