import React, { useState } from 'react'
import mailIcon from '../../../resources/mail-icon.png'
import newsletterService from '../../../services/newsletterService'
import NewsletterContent from './NewsletterContent'


const NewsletterBox = ({ open, setOpen }) => {  
  const [ hasSendedMailAddress, setHasSendedMailAddress] = useState(false)  
  const [ hasErrored, setHasErrored ] = useState(false)

  const handleSubmit = async (event) => {    
    event.preventDefault()
    setHasErrored(false)      
    try {      
      setHasSendedMailAddress(true)
      await newsletterService.postMailAddress({address: event.target.email.value})            
    } catch {
      setOpen(true)
      setHasErrored(true)     
    }        
  }
  
  const handleCloseBox = () => {
    setOpen(false)
    setHasErrored(false)
    setHasSendedMailAddress(false)
  }
  
  const handleTryAgain = () => {
    setHasErrored(false)
    setHasSendedMailAddress(false)
  }

  if (open === false) {
    return null
  }
  
  return (
    <div className='Newsletter-background' onClick={handleCloseBox}>
      <div className='Newsletter-box' onClick={(event) => event.stopPropagation()}>
        <img className='Newsletter-box-icon' src={mailIcon} alt='mail icon' />
        <button 
          className='Newsletter-box-close-button'
          onClick={handleCloseBox}
          aria-label="Close Newsletter subsricption Box">
            ×
        </button>        
        <NewsletterContent 
          hasErrored={hasErrored}
          hasSendedMailAddress={hasSendedMailAddress}
          handleTryAgain={handleTryAgain}
          handleSubmit={handleSubmit} 
        />
      </div>
    </div>
  )
}

export default NewsletterBox