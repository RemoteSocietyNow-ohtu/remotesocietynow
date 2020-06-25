import React, { useContext } from 'react'
import arrowLeft from '../../resources/arrow-left.png'
import LanguageContext from '@root/client/Contexts/LanguageContext'

const BackButton = ({ handleOnClick }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='GoBack-arrow-icon-div'>
      <button className='GoBack-arrow-button' onClick={handleOnClick}>
        <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />          
        <a className='Go-back-link'>{language.content.goBack}</a>
      </button>
    </div>
  )
}

export default BackButton