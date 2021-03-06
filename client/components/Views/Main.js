import React, { useContext, useState } from 'react'
import background from '../../resources/background.gif'
import LanguageContext from '../../Contexts/LanguageContext'
import NewsletterBox from '../SubComponents/Newsletter/NewsletterBox'

import yourDataIcon from '../../resources/your-data-icon.png'
import yourNewsletterIcon from '../../resources/mail-icon-white.png'
import aboutUsIcon from '../../resources/aboutUs-icon-white.png'


const Main = ({ setBody }) => {
  const [newsletterOpen, setNewsletterOpen] = useState(false)
  const language = useContext(LanguageContext)
  

  return (
    <div className='Container'>
      <div className='Main-container'>        
        <div className='Main-container-content'>
          <div className='Main-content-left'>
            <h1 className='Heading'>{language.headers.mainHeader}</h1>
            <button className='Main-button' onClick={() => setBody('calculatorChoice')}>{language.buttons.main}</button>
            <p className='Main-lead-paragraph'>{language.content.lead}</p>
          </div>
          <div className='Main-content-right'>
            <img className='Main-background-video-gif' src={background} alt='backgroundImage' />
          </div>
        </div>
        <NewsletterBox open={newsletterOpen} setOpen={setNewsletterOpen} />
        <div className='Main-bottom-navigation-bar'>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <button className='Main-bottom-navigation-bar-item' onClick={() => setBody('gdprCompliance')}><img className='Main-bottom-bar-icon' src={yourDataIcon} alt={language.buttons.data} />{language.buttons.data}</button>
            <button className='Main-bottom-navigation-bar-item' onClick={() => setBody('about')}><img className='Main-bottom-bar-icon' src={aboutUsIcon} alt={language.navigation.aboutUs} />{language.navigation.aboutUs}</button>
          </div>
          <button className='Main-bottom-navigation-bar-item' onClick={() => setNewsletterOpen(true)}><img className='Main-bottom-bar-icon' src={yourNewsletterIcon} alt={language.headers.subscribeToOurNewsletter} />{language.headers.subscribeToOurNewsletter}</button>
        </div>
      </div>
    </div>
  )
}

export default Main
