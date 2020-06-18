import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import cross from '../../resources/cross-icon.png'

const Mathinfo = ({onClick}) => {
  const language = useContext(LanguageContext)
  return (
      <div id='mathinfo' className='Mathinfo-container'>
        <h2>{language.headers.aboutTheMath}</h2>
        <p>{language.mathInfo}</p>
        <a className='Mathinfo-x-button' onClick={onClick}>
          <img style={{height: '1.5rem'}} src={cross} />
        </a>
      </div>
  )
}

export default Mathinfo
