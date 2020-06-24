import React, { useContext } from 'react'
import LanguageContext from '@root/client/Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'

const PrivacyPolicy = ({ setAcceptPrivacyPolicy, setBody }) => {
  const language = useContext(LanguageContext)

  const handleClick = () => {
    setAcceptPrivacyPolicy(true)
    setBody()
  }

  return (
    <div className='Container'>
      <div className='PrivacyPolicy-container'>
        <div className='GoBack-arrow-icon-div' onClick={() => setBody('main')}>
          <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />
          <a className='Go-back-link'>{language.content.goBack}</a>
        </div>
        {Object.entries(language.privacyPolicy.infoTexts).map(([key, value]) => {
          if (key.includes('HeadingSmall')) {
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
      <button className='PrivacyPolicy-button' onClick={() => handleClick()}>{language.buttons.accept}</button>
    </div>
  )
}

export default PrivacyPolicy
