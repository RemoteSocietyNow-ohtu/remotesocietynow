import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const Mathinfo = () => {
  const language = useContext(LanguageContext)
  return (
    <div className='Container'>
      <div className='AboutUs-mathinfo-container'>
        <h2>{language.headers.aboutTheMath}</h2>
        <p>{language.mathInfo}</p>
      </div>
    </div>
  )
}

export default Mathinfo
