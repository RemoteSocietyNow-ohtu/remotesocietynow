import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import atIcon from '../../../resources/at-white.png'

const ContactInfo = ({ setNewsletterOpen }) => {
  const language = useContext(LanguageContext)
  return (
    <div className='Calculator-results-bottom-navigation-bar'>
      <img className='Calculator-results-bottom-navigation-bar-icon' src={atIcon} />
      <h2>Connect with us: </h2>
      <p>We at RemoteSocietyNow are committed to work for better environment and to help you save money!</p>
      <div className='Calculator-results-bottom-navigation-bar-contacts'>
        
        <a className='Calculator-results-newsletter-button' onClick={() => setNewsletterOpen(true)}>{language.headers.subscribeToOurNewsletter}</a>
        <a className='Calculator-results-newsletter-button'>Contact us</a>
      </div>
    </div>
  )
}

export default ContactInfo