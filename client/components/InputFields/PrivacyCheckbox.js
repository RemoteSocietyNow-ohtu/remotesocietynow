import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const PrivacyCheckbox = ({ checked, setChecked, setBody }) => {
  const language = useContext(LanguageContext)
  return (
    <div onClick={setChecked}>
      <input
        className='CalculatorChoice-checkbox'
        type='checkbox'
        checked={checked}    
        onChange={setChecked}    
      />
      <label className='CalculatorChoice-checkbox-label' >
        To use our website you need to accept our 
        <span className='CalculatorChoice-privacy-policy-link' onClick={() => setBody('privacy-policy')}> {language.headers.privacyPolicy}.</span>      
      </label>
    </div>
  )
}

export default PrivacyCheckbox