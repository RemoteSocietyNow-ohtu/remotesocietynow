import React, { useContext } from 'react'
import LanguageContext from '@root/client/Contexts/LanguageContext'


const PrivacyPolicy = ({ setAcceptPrivacyPolicy, setBody }) => {
  const language = useContext(LanguageContext)

  const handleClick = () => {
    setAcceptPrivacyPolicy(true)
    setBody('calculatorChoice')
  }

  return (
    <div className='Container'>
      <div className='PrivacyPolicy-container'>
        {Object.entries(language.privacyPolicy.infoTexts).map(([ key, value ]) => { 
          if(key.includes('HeadingSmall')) {
            return <h3 key={key}>{value}</h3>
          }
          else if (key.includes('HeadingMain')) {
            return <h1 key={key}>{value}</h1>
          }
          else if (key.includes('Heading')) {
            return <h2 key={key}>{value}</h2>
          }
          return (
            <p key={key} className='PrivacyPolicy-paragraph'>{value}</p>
          )
        })}
      </div>
      <button className='Button-accept-privacy-policy' onClick={() => handleClick()}>{language.buttons.accept}</button>
    </div>
  )
}

export default PrivacyPolicy
