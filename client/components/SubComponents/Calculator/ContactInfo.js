import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import mailConfig from '../../../../config/mailConfig'
import yourNewsletterIcon from '../../../resources/mail-icon-white.png'
import aboutUsIcon from '../../../resources/aboutUs-icon-white.png'
import atIcon from '../../../resources/at-white.png'

const ContactInfo = ({ setNewsletterOpen, setBody }) => {
  const language = useContext(LanguageContext)
  return (
    <div className='Calculator-results-bottom-bar'>                 
      <div className='Calculator-results-bottom-bar-contacts'>
        <h2 className='Calculator-results-bottom-bar-header'>{language.headers.connectWithUs}</h2>
        <p>{language.content.weAreCommitted}</p>
        <a className='Calculator-results-bottom-bar-button' onClick={() => setNewsletterOpen(true)}><img className='Main-bottom-bar-icon' src={yourNewsletterIcon} />{language.headers.subscribeToOurNewsletter}</a>
        <a className='Calculator-results-bottom-bar-button' onClick={() => setBody('about')}><img className='Main-bottom-bar-icon' src={aboutUsIcon} />{language.content.aboutUs}</a>
        <a className='Calculator-results-bottom-bar-button' href={`mailto:${mailConfig.CONTACT_MAIL}`}><img className='Main-bottom-bar-icon' src={atIcon} />{language.buttons.contactUs}</a>
      </div>
    </div>    
  )
}

export default ContactInfo