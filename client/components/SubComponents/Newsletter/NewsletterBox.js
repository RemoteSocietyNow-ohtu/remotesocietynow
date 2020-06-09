import React, { useState, useContext } from 'react'
import mailIcon from '../../../resources/mail-icon.png'
import LanguageContext from '@root/client/Contexts/LanguageContext'
import newsletterService from '../../../services/newsletterService'
import LoadingScreen from '../../Views/LoadingScreen'

const NewsletterBox = () => {
  const [ open, setOpen ] = useState(true)
  const [ hasSendedMailAddress, setHasSendedMailAddress] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ hasErrored, setHasErrored ] = useState(false)
  const language = useContext(LanguageContext)

  const handleSubmit = async (event) => {    
    event.preventDefault()
    console.log(event.target.email.value)
    setLoading(true)
    setHasErrored(false)    
    try {
      await newsletterService.postMailAddress()
      setHasSendedMailAddress(true)
      setLoading(false)
    } catch {
      console.log('errori')
      setHasErrored(true)
      setLoading(false)
    }        
  }
  if (open === false) {
    return null
  }

  if(loading === true) {
    <div className='Newsletter-box'>
      <LoadingScreen />
    </div>
  }

  if(hasErrored === true) {
    return (
      <div className='Newsletter-box'>
        <img className='Newsletter-box-icon' src={mailIcon} alt='mail icon' />
        <button className='Newsletter-box-close-button' onClick={() => setOpen(false)} aria-label="Close Newsletter subsricption Box">×</button>
        <p className='Newsletter-box-paragraph'>{language.errors.errorSendingEmailAddress}</p>
      </div>
    )    
  }

  if (hasSendedMailAddress === true && open === true) {
    return (
      <div className='Newsletter-box'>
        <button className='Newsletter-box-close-button' onClick={() => setOpen(false)} aria-label="Close Newsletter subsricption Box">×</button>
        <img className='Newsletter-box-icon' src={mailIcon} alt='mail icon' />
        <h2 className='Newsletter-box-header'>{language.headers.newsletterThanksForSubscribing}</h2>
        <p className='Newsletter-box-paragraph'>{language.content.newsletterThanksForSubscribing}</p>        
      </div>
    )
  }

  return (
    <div className='Newsletter-box'>
      <img className='Newsletter-box-icon' src={mailIcon} alt='mail icon' />
      <button className='Newsletter-box-close-button' onClick={() => setOpen(false)} aria-label="Close Newsletter subsricption Box">×</button>
      <h2 className='Newsletter-box-header'>{language.headers.subscribeToOurNewsletter}</h2>
      <p className='Newsletter-box-paragraph'>{language.content.newsletter}</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor='email' className='Newsletter-field-label'>{language.headers.emailAddress}</label>
        <input type='text' className='Newsletter-field' name='email'/>
        <input type='submit' className='Newsletter-send-button' value={language.buttons.subscribe} />
      </form>
    </div>
  )
}

export default NewsletterBox