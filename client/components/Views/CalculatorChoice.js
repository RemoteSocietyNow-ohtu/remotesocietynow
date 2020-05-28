import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const CalculatorChoice = ({ setBody }) => {
  const language = useContext(LanguageContext)

  return(
    <div className='Container'>
      <div className='Container-choice'>
        <p>{language.headers.calculateChoiceHeader}</p>

        <button className='Calculator-choice-button' onClick={() => setBody('people')} >
          {language.buttons.calculateChoiceMyself}
        </button>
        <button className='Calculator-choice-button' onClick={() => setBody('companies')} >
          {language.buttons.calculateChoiceCompanies}
        </button>
      </div>
    </div>
  )
}

export default CalculatorChoice