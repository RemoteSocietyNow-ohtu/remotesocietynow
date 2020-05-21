import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const Projectinfo = () => {
  const language = useContext(LanguageContext)
  return (
    <div className='Container'>
      <div className='Project-info'>
        <div className='Question-separator'></div>
        <div className='Container'>
          {language.projectInfo.map((info, i) => <p key={i}>{info}</p>)}
        </div>
      </div>
    </div>
  )
}

export default Projectinfo
