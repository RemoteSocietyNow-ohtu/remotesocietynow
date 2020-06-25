import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import checkboxImage from '../../resources/checkbox.png'
import checkboxImageChecked from '../../resources/checkbox-checked.png'

const PrivacyCheckbox = ({ checked, setChecked, setBody }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='CalculatorChoice-checkbox-container' onClick={setChecked}>      
      <button
        className='CalculatorChoice-checkbox'
        name='CalculatorChoice-checkbox'
        type='checkbox'
        checked={checked}    
        onChange={setChecked}    
      >
        {checked ? 
          <img className='CalculatorChoice-checkbox-image' src={checkboxImageChecked} alt='checkbox checked' /> 
          : 
          <img className='CalculatorChoice-checkbox-image' src={checkboxImage} alt='checkbox unchecked' />
        }
      </button>
      <label className='CalculatorChoice-checkbox-label' htmlFor='CalculatorChoice-checkbox' >
        {language.content.privacyPolicy} 
        <span className='CalculatorChoice-privacy-policy-link' onClick={() => setBody('privacy-policy')}> {language.headers.privacyPolicy}.</span>      
      </label>
    </div>
  )
}

export default PrivacyCheckbox