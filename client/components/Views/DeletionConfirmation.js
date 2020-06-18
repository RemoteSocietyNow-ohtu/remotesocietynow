import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'
import deleteIcon from '../../resources/delete-icon.png'

const DeletionConfirmation = ({ setBody }) => {

  const language = useContext(LanguageContext)

  const deleteUserData = () => {
    // todo
  }

  return (
    <div className='Container'>
      <div className='GDPRCompliance-arrow-icon-div' onClick={() => setBody('main')}>
        <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />
        <a className='GDPRCompliance-go-back'>{language.content.goBack}</a>
      </div>
      <h3 className='Heading'>{language.headers.deletionConfirmation}</h3>
      <div className='GDPRCompliance-content'>
        <div className='Line-separator-vertical'></div>
        <div className='DeletionConfirmation-div'>
          <img className='DeletionConfirmation-icon' src={deleteIcon} alt='Trash can icon' />
          <p>{language.content.deletionConfirmation}</p>
        </div>
        <div className='Line-separator-vertical'></div>
        <div className='GDPRCompliance-button-div'>
          <button className='GDPRCompliance-button' onClick={() => setBody('gdprCompliance')}>{language.buttons.no}</button>
          <button className='GDPRCompliance-button-delete' onClick={() => deleteUserData()}>{language.buttons.yes}</button>
        </div>
      </div>
    </div>
  )
}

export default DeletionConfirmation
