import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PrivacyCheckbox from 'Components/InputFields/PrivacyCheckbox'

const CalculatorChoice = ({ setBody, acceptPrivacyPolicy, setAcceptPrivacyPolicy }) => {
  const language = useContext(LanguageContext)
 

  return(
    <div className='Container'>      
      <div className='CalculatorChoice-container'>
        <h2 className='CalculatorChoice-header'>{language.headers.calculateChoiceHeader}</h2>        
        <PrivacyCheckbox           
          checked={acceptPrivacyPolicy}
          setChecked={() => setAcceptPrivacyPolicy(!acceptPrivacyPolicy)}
          setBody={setBody}
        />
        <button
          disabled={!acceptPrivacyPolicy}
          className='CalculatorChoice-button' 
          onClick={() => setBody('people')} >
          {language.buttons.calculateChoiceMyself}
        </button>
        <button
          disabled={!acceptPrivacyPolicy}
          className='CalculatorChoice-button' 
          onClick={() => setBody('companies')} >
          {language.buttons.calculateChoiceCompanies}
        </button>
      </div>
    </div>
  )
}

export default CalculatorChoice