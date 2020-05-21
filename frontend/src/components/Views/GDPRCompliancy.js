import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const GDPRCompliancy = () => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <h3 className='Heading'>{language.headers.gdprCompliancy}</h3>
      <div className='Content-gdprCompliancy'>
        <div className='Line-separator-full'></div>
        {language.content.gdprCompliancy.map((info, i) => <p key={i}>{info}</p>)}
        <div className='Line-separator-full'></div>
        <small className='Contact-info'>{language.content.contactInfo}</small>
      </div>
    </div>
  )
}

export default GDPRCompliancy
