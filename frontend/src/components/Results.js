import React, { useContext } from 'react'
import LanguageContext from '../Contexts/LanguageContext'

const Results = ({ results }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='Alexis-Marie'>     
      <p>{language.results.commuteCO2result}:</p>
      <p>{results.co2 ? results.co2 : '-'} {language.units.kg}</p> 
      <p>{language.results.commuteCO2savings}:</p>
      <p>{results.co2reduce ? results.co2reduce : '-'} {language.units.kg}</p>
    </div>
  )
}

export default Results