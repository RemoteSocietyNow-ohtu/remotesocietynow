import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PrivacyCheckbox from 'Components/InputFields/PrivacyCheckbox'

const CalculatorChoice = ({ setBody, acceptPrivacyPolicy, setAcceptPrivacyPolicy }) => {
  const language = useContext(LanguageContext)
 

  return(
    <div className='Container'>      
      <div className='Container-choice'>
        <p>{language.headers.calculateChoiceHeader}</p>        
        <PrivacyCheckbox           
          checked={acceptPrivacyPolicy}
          setChecked={() => setAcceptPrivacyPolicy(!acceptPrivacyPolicy)}
          setBody={setBody}
        />
        <button
          disabled={!acceptPrivacyPolicy}
          className='Calculator-choice-button' 
          onClick={() => setBody('people')} >
          {language.buttons.calculateChoiceMyself}
        </button>
        <button
          disabled={!acceptPrivacyPolicy}
          className='Calculator-choice-button' 
          onClick={() => setBody('companies')} >
          {language.buttons.calculateChoiceCompanies}
        </button>
      </div>
    </div>
  )
}

export default CalculatorChoice