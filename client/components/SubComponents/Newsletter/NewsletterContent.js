import React, { useContext } from 'react'
import LanguageContext from '@root/client/Contexts/LanguageContext'

const NewsletterContent = ({ hasErrored, hasSendedMailAddress, handleTryAgain, handleSubmit }) => {
  const language = useContext(LanguageContext)

  const selectContent = () => {
    if (hasErrored === true) {
      return (
        <>
          <p className='Newsletter-box-paragraph'>{language.errors.errorSendingEmailAddress}</p>
          <button className='Newsletter-send-button' onClick={handleTryAgain}>{language.buttons.tryAgain}</button>
        </>
      )    
    } else if (hasSendedMailAddress === true) {
      return (
        <>
          <h2 className='Newsletter-box-header'>{language.headers.newsletterThanksForSubscribing}</h2>
          <p className='Newsletter-box-paragraph'>{language.content.newsletterThanksForSubscribing}</p>
        </>
      )
    } else {
      return (
        <>
          <h2 className='Newsletter-box-header'>{language.headers.subscribeToOurNewsletter}</h2>
          <p className='Newsletter-box-paragraph'>{language.content.newsletter}</p>
          <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor='email' className='Newsletter-field-label'>{language.headers.emailAddress}</label>
            <input type='email' className='Newsletter-field' name='email'/>
            <input type='submit' className='Newsletter-send-button' value={language.buttons.subscribe} />
          </form>
        </>
      )
    }
  }

  return selectContent()
}

export default NewsletterContent