import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const PrivacyCheckbox = ({ checked, setChecked, setBody }) => {
  const language = useContext(LanguageContext)
  return (
    <div onClick={setChecked}>
      <input
        className='checkbox-custom'
        type='checkbox'
        checked={checked}    
        onClick={setChecked}    
      />
      <label className='checkbox-custom-label' style={{fontSize: '0.3em'}}>
        To use our website you need to accept our 
        <span className='Privacy-policy-link' onClick={() => setBody('privacy-policy')}> {language.headers.privacyPolicy}.</span>      
      </label>
    </div>
  )
}

export default PrivacyCheckbox