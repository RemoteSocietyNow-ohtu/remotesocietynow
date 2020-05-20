import React, { useContext } from 'react'
import LanguageContext from '../Contexts/LanguageContext'

const ResultsCompany = ({ results }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Results'>     
        <p>{language.results.businessMoneyUsage}:</p>
        <p>{results.upkeep ? results.upkeep : '-'} {language.units.euro}</p> 
        <div className='Line-separator-full' /> 
        <p>{language.results.businessMoneySavings}:</p>
        <p>{results.moneySavings ? results.moneySavings : '-'} {language.units.euro}</p>
      </div>
    </div>
  )
}
  
export default ResultsCompany
