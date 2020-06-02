import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const GDPRCompliance = () => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <h3 className='Heading'>{language.headers.gdprCompliance}</h3>
      <div className='GDPRCompliance-content'>
        <div className='Line-separator-vertical'></div>
        {language.content.gdprCompliance.map((info, i) => <p key={i}>{info}</p>)}
        <div className='Line-separator-vertical'></div>
        <small className='GDPRCompliance-contact-info'>{language.content.contactInfo}</small>
      </div>
    </div>
  )
}

export default GDPRCompliance
