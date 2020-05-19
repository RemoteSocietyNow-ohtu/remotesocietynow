import React, { useContext } from 'react'
import LanguageContext from '../Contexts/LanguageContext'

const Companies = () => {
  const language = useContext(LanguageContext)
  return (
    <div>
      <div className='Body'>
        <div className='Spacer-vertical'></div>
        <p className='Box'>{language.headers.companies}</p>
      </div>
    </div>
  )
}

export default Companies
