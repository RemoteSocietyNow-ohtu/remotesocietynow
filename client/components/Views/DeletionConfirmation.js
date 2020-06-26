import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'
import deleteIcon from '../../resources/delete-icon.png'
import fileservise from '../../services/fileService'

const DeletionConfirmation = ({Cookies, setBody }) => {
  const [ hasErrored, setHasErrored ] = useState(false)
  const [ hasSucceeded, setHasSucceeded ] = useState(false)

  const language = useContext(LanguageContext)
  let token = Cookies.get('token')

  const deleteUserData = async () => {
    try {
      await fileservise.deleteUser(token)   
      Cookies.remove('token')
      Cookies.remove('adminToken')
      setHasSucceeded(true)
    } catch (error) {      
      setHasErrored(true)
    }     
  }

  const goToFrontPage = () => {       
    window.location.replace(window.location.origin)
  }

  const FailedModal = () => {
    return (
      <div className='Newsletter-background' onClick={() => setHasErrored(false)}>
        <div className='Newsletter-box' onClick={(event) => event.stopPropagation()}>
          <button 
            className='Newsletter-box-close-button'
            onClick={() => setHasErrored(false)}
            aria-label="Close Newsletter subsricption Box">
              ×
          </button>
          <p>{language.errors.accountNotDeleted}</p>    
          <button className='Newsletter-send-button' onClick={() => setHasErrored(false)}>Close</button>
        </div>
      </div>
    )
  }

  const SuccessModal = () => {
    return (
      <div className='Newsletter-background' onClick={goToFrontPage}>
        <div className='Newsletter-box' onClick={(event) => event.stopPropagation()}>
          <button 
            className='Newsletter-box-close-button'
            onClick={goToFrontPage}
            aria-label='Close Newsletter subsricption Box'>
              ×
          </button>
          <p>{language.success.accountDeleted}</p>    
          <button className='Newsletter-send-button' onClick={goToFrontPage}>Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className='Container'>

      {hasErrored === true && <FailedModal />}
      {hasSucceeded === true && <SuccessModal />}
      <div className='GoBack-arrow-icon-div' onClick={() => setBody('gdprCompliance')}>
        <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />
        <a className='Go-back-link'>{language.content.goBack}</a>
      </div>
      <h3 className='Heading'>{language.headers.deletionConfirmation}</h3>
      <div className='GDPRCompliance-content'>
        <div className='Line-separator-vertical'></div>
        <div className='DeletionConfirmation-div'>
          <img className='DeletionConfirmation-icon' src={deleteIcon} alt='Trash can icon' />
          <p>{language.content.deletionConfirmation}</p>
        </div>
        <div className='Line-separator-vertical'></div>
        <div className='DeletionConfirmation-button-div'>
          <button className='GDPRCompliance-button' onClick={() => setBody('gdprCompliance')}>{language.buttons.no}</button>
          <button className='GDPRCompliance-button-delete' onClick={() => deleteUserData()}>{language.buttons.yes}</button>
        </div>
      </div>
    </div>
  )
}

export default DeletionConfirmation
