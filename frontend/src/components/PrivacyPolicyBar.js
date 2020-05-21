import React, { useContext } from 'react'
import LanguageContext from '../Contexts/LanguageContext'

const PrivacyPolicyBar = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='PrivacyPolicyBar'>
      <p>{language.content.privacyPolicyBar}</p>
      <button className='Button-privacyPolicyBar' onClick={() => setBody('privacy-policy')}>Privacy Policy</button>
    </div>
  )
}

export default PrivacyPolicyBar
