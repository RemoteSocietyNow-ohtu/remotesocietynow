import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'

const GDPRCompliance = ({ Cookies, setBody }) => {

  const language = useContext(LanguageContext)

  const downloadUserData = () => {
    // todo
  }

  return (
    <div className='Container'>
      <div className='GDPRCompliance-arrow-icon-div' onClick={() => setBody('main')}>
        <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />
        <a className='GDPRCompliance-go-back'>{language.content.goBack}</a>
      </div>
      <h3 className='Heading'>{language.headers.gdprCompliance}</h3>
      <div className='GDPRCompliance-content'>
        <div className='Line-separator-vertical'></div>
        {language.content.gdprCompliance.map((info, i) => <p key={i}>{info}</p>)}
        <div className='Line-separator-vertical'></div>
        <small className='GDPRCompliance-contact-info'>{language.content.contactInfo}</small>
      </div>
      {Cookies.get('token') && <div className='GDPRCompliance-button-div'>
        <button className='GDPRCompliance-button' onClick={() => downloadUserData()}>{language.buttons.downloadUserData}</button>
        <button className='GDPRCompliance-button-delete' onClick={() => setBody('deletionConfirmation')}>{language.buttons.deleteUserData}</button>
      </div>}
    </div>
  )
}

export default GDPRCompliance
