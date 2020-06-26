import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'
import deleteIcon from '../../resources/delete-icon.png'
import fileservice from '../../services/fileService'

const DeletionConfirmation = ({Cookies, setBody }) => {
  const [ hasErrored, setHasErrored ] = useState(true)
  const [ hasSucceeded, setHasSucceeded ] = useState(false)

  const language = useContext(LanguageContext)
  let token = Cookies.get('token')

  const deleteUserData = async () => {
    try {
      await fileservice.deleteUser(token)   
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

  const Modal = ({ message, handleClose }) => {
    return (
      <div className='DeletionConfirmation-modal-background' onClick={handleClose}>
        <div className='DeletionConfirmation-modal-box' onClick={(event) => event.stopPropagation()}>
          <button 
            className='DeletionConfirmation-modal-close-button'
            onClick={handleClose}
            aria-label="Close">
              ×
          </button>
          <p>{message}</p>    
          <button className='DeletionConfirmation-modal-button' onClick={handleClose}>Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className='Container'>

      {hasErrored === true && <Modal message={language.errors.accountNotDeleted} handleClose={() => setHasErrored(false)} />}
      {hasSucceeded === true && <Modal message={language.success.accountDeleted} handleClose={goToFrontPage} />}
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
