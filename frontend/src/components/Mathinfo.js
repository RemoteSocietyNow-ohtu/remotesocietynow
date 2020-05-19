import React, { useContext } from 'react'
import LanguageContext from '../Contexts/LanguageContext'

const Mathinfo = () => {
  const language = useContext(LanguageContext)
  return (
    <div className='Container'>
      <div className='Math-info'>
        <h2 className='Alexis-Marie'>{language.headers.aboutTheMath}</h2>
        <p>{language.mathInfo}</p>
      </div>
    </div>
  )
}

export default Mathinfo
