import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'

const ContactInfo = ({ setNewsletterOpen }) => {
  const language = useContext(LanguageContext)
  return (
    <div className='Calculator-results-bottom-bar'>                 
      <div className='Calculator-results-bottom-bar-contacts'>
        <h2 className='Calculator-results-bottom-bar-header'>Connect with us: </h2>
        <p>We at RemoteSocietyNow are committed to work for better environment and to help you save money! Please take contact and we can find out how we can help make your remote work impact better.</p>
        <a className='Calculator-results-bottom-bar-button' onClick={() => setNewsletterOpen(true)}>{language.headers.subscribeToOurNewsletter}</a>
        <a className='Calculator-results-bottom-bar-button'>Contact us</a>
      </div>
    </div>    
  )
}

export default ContactInfo