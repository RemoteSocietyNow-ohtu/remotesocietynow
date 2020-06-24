import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'

const SavingsDemonstrator = ({results, answers}) => {
  const language = useContext(LanguageContext)
  const result = results.find(result => result.bartype === 'greenbar')
  return (
    <div onClick={(event) => event.stopPropagation()} className='Calculator-results-savings-container'>
      <p>{language.content.savingsHeadingStart} 
      <b>{answers.numberOfRemoteworkDays}
      </b> {language.content.savingsHeadingSave}
       <b>{result.value}</b> 
      {language.content.savingsHeadingAbout} </p>
      <p><b>{Math.floor(result.value/0.155)}</b> {language.content.savingsCar}</p>
      <p><b>{Math.round(result.value/705 * 10)/10}</b> {language.content.savingsPlane}</p>
    </div>
  )
}

export default SavingsDemonstrator