import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import yourNewsletterIcon from '../../../resources/mail-icon-white.png'
import atIcon from '../../../resources/at-white.png'

const ContactInfo = ({ setNewsletterOpen }) => {
  const language = useContext(LanguageContext)
  return (
    <div className='Calculator-results-bottom-bar'>                 
      <div className='Calculator-results-bottom-bar-contacts'>
        <h2 className='Calculator-results-bottom-bar-header'>{language.headers.connectWithUs}</h2>
        <p>{language.content.weAreCommitted}</p>
        <a className='Calculator-results-bottom-bar-button' onClick={() => setNewsletterOpen(true)}><img className='Main-bottom-bar-icon' src={yourNewsletterIcon} />{language.headers.subscribeToOurNewsletter}</a>
        <a className='Calculator-results-bottom-bar-button'><img className='Main-bottom-bar-icon' src={atIcon} />{language.buttons.contactUs}</a>
      </div>
    </div>    
  )
}

export default ContactInfo