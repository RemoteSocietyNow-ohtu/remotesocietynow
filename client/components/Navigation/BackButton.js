import React, { useContext } from 'react'
import arrowLeft from '../../resources/arrow-left.png'
import LanguageContext from '@root/client/Contexts/LanguageContext'

const BackButton = ({ handleOnClick }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='GoBack-arrow-icon-div' onClick={handleOnClick}>
      <button className='GoBack-arrow-button' name='backButton' onClick={handleOnClick}>
        <img className='GoBack-arrow-icon' src={arrowLeft} />    
      </button>
      <label className='GoBack-arrow-label' htmlFor='backButton'>{language.content.goBack}</label>
    </div>
  )
}

export default BackButton