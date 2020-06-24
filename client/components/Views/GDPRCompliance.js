import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'
import rightToKnowIcon from '../../resources/right-to-know-icon.png'
import rightToAskIcon from '../../resources/right-to-ask-icon.png'
import rightToCorrectIcon from '../../resources/right-to-correct-icon.png'
import rightToDeleteIcon from '../../resources/delete-icon.png'
import rightToRefuseIcon from '../../resources/right-to-refuse-icon.png'

const GDPRCompliance = ({ Cookies, setBody }) => {
  
  const language = useContext(LanguageContext)

  let token 
  Cookies.get('token') ? token = Cookies.get('token') : token = ''

  return (
    <div className='Container'>
      
      <h3 className='Heading'>{language.headers.gdprCompliance}</h3>
      <div className='GDPRCompliance-content'>
        <div className='Line-separator-vertical'></div>
        <div className='GDPRCompliance-content-div'>
          <img className='GDPRCompliance-icon' src={rightToKnowIcon} />
          <p>{language.content.gdprCompliance.rightToKnow}</p>
        </div>
        <div className='GDPRCompliance-content-div'>
          <img className='GDPRCompliance-icon' src={rightToAskIcon} />
          <p>{language.content.gdprCompliance.rightToAsk}</p>
        </div>
        <div className='GDPRCompliance-content-div'>
          <img className='GDPRCompliance-icon' src={rightToCorrectIcon} />
          <p>{language.content.gdprCompliance.rightToCorrect}</p>
        </div>
        <div className='GDPRCompliance-content-div'>
          <img className='GDPRCompliance-icon' src={rightToDeleteIcon} />
          <p>{language.content.gdprCompliance.rightToDelete}</p>
        </div>
        <div className='GDPRCompliance-content-div'>
          <img className='GDPRCompliance-icon' src={rightToRefuseIcon} />
          <p>{language.content.gdprCompliance.rightToRefuse}</p>
        </div>
        <div className='Line-separator-vertical'></div>
        <small className='GDPRCompliance-contact-info'>{language.content.contactInfo}</small>
      </div>
      <div className='GoBack-arrow-icon-div' onClick={() => setBody('main')}>
        <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />
        <a className='Go-back-link'>{language.content.goBack}</a>
      </div>
      {token != '' && <div className='GDPRCompliance-button-div'>
        <a href={`/api/files/companyCSV/${token}`}><button className='GDPRCompliance-button'>{language.buttons.downloadUserDataPerson}</button></a>
        <a href={`/api/files/employeeCSV/${token}`}><button className='GDPRCompliance-button'>{language.buttons.downloadUserDataCompany}</button></a>
        <button className='GDPRCompliance-button-delete' onClick={() => setBody('deletionConfirmation')}>{language.buttons.deleteUserData}</button>
      </div>}
    </div>
  )
}

export default GDPRCompliance
