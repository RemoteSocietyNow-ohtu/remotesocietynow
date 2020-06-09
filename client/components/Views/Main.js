import React, { useContext, useState,useEffect } from 'react'
import background from '../../resources/background.gif'
import LanguageContext from '../../Contexts/LanguageContext'
import NewsletterBox from '../SubComponents/Newsletter/NewsletterBox'

import yourDataIcon from '../../resources/your-data-icon.png'

const Main = ({ setBody }) => {
  const [ newsletterOpen, setNewsletterOpen ] = useState(false)
  const language = useContext(LanguageContext)

  useEffect(() => {
    const timeout = setTimeout(() => setNewsletterOpen(true), 10000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='Container'>
      <div className='Main-container'>
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
      <div className='Navigation-bar'> 
        <p className='Navigation-item' onClick={() => setBody('gdprCompliance')}><img className='Main-your-data-icon' src={yourDataIcon} />{language.buttons.data}</p>
        <p className='Navigation-item' onClick={() => setNewsletterOpen(true)}>{language.headers.subscribeToOurNewsletter}</p>
      </div>
    </div>
  )
}

export default Main
