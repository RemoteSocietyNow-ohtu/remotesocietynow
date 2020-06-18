import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import checkboxImage from '../../resources/checkbox.png'
import checkboxImageChecked from '../../resources/checkbox-checked.png'

const CookieCheckbox = ({ checked, setChecked }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='CalculatorChoice-checkbox-container' onClick={setChecked}>      
      <button
        className='CalculatorChoice-checkbox'
        type='checkbox'
        checked={checked}    
        onChange={setChecked}    
      >
        {checked ? 
          <img className='CalculatorChoice-checkbox-image' src={checkboxImageChecked} /> 
          : 
          <img className='CalculatorChoice-checkbox-image' src={checkboxImage} />
        }
      </button>
      <label className='CalculatorChoice-checkbox-label' >
        {language.content.cookiePolicy}       
      </label>
    </div>
  )
}

export default CookieCheckbox