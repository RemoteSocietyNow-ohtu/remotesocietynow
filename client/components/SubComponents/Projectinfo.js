import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const Projectinfo = () => {
  const language = useContext(LanguageContext)
  return (
    <div>      
      <div className='Container'>
        {language.projectInfo.map((info, i) => <p key={i} className='AboutUs-paragraph' >{info}</p>)}
      </div>
        
    </div>
  )
}

export default Projectinfo
