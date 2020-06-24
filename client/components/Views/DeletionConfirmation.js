import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'
import deleteIcon from '../../resources/delete-icon.png'
import fileservise from '../../services/fileService'
import authenticationService from '../../services/authenticationService'

const DeletionConfirmation = ({Cookies, setBody }) => {

  const language = useContext(LanguageContext)
  let token = Cookies.get('token')

  const deleteUserData = () => {
    fileservise.deleteUser(token)
    authenticationService.logout(Cookies)
  }

  return (
    <div className='Container'>
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
