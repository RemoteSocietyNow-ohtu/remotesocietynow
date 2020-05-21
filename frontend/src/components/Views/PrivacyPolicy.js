import React, { useContext } from 'react'
import languageContext from '../../Contexts/LanguageContext'

const PrivacyPolicy = ({ setAcceptPrivacyPolicy, setBody }) => {

  const language = useContext(languageContext)

  const handleClick = () => {
    setAcceptPrivacyPolicy(true)
    setBody('main')
  }

  return (
    <div className='Container'>
      <h4 className='Heading'>{language.headers.privacyPolicy}</h4>
      <div className='PrivacyPolicy'>
        {language.privacyPolicy.map(line => <p>{line}</p>)}
      </div>
      <button className='Button-accept-privacy-policy' onClick={() => handleClick()}>Accept</button>
    </div>
  )
}

export default PrivacyPolicy
