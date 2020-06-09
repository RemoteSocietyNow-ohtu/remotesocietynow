import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import PrivacyCheckbox from 'Components/InputFields/PrivacyCheckbox'

import myselfIcon from '../../resources/myself-icon.png'
import myselfIconGrayedOut from '../../resources/myself-grayed-out-icon.png'
import myCompanyIcon from '../../resources/my-company-icon.png'
import myCompanyGrayedOut from '../../resources/my-company-grayed-out-icon.png'

const CalculatorChoice = ({ setBody, acceptPrivacyPolicy, setAcceptPrivacyPolicy }) => {
  const language = useContext(LanguageContext)

  return (
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
          {language.buttons.calculateChoiceMyself}{!acceptPrivacyPolicy && <img className='Calculator-choice-grayed-out-icon' src={myselfIconGrayedOut} />}{acceptPrivacyPolicy && <img className='Calculator-choice-icon' src={myselfIcon} />}
        </button>
        <button
          disabled={!acceptPrivacyPolicy}
          className='CalculatorChoice-button'
          onClick={() => setBody('companies')} >
          {language.buttons.calculateChoiceCompanies}{!acceptPrivacyPolicy && <img className='Calculator-choice-grayed-out-icon' src={myCompanyGrayedOut} />}{acceptPrivacyPolicy && <img className='Calculator-choice-icon' src={myCompanyIcon} />}
        </button>
      </div>
    </div>
  )
}

export default CalculatorChoice