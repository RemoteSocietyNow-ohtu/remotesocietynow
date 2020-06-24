import React, { useState, useContext } from 'react'
import authenticationService from '../../services/authenticationService'
import LanguageContext from '../../Contexts/LanguageContext'

const PasswordChange = ({ adminToken }) => {
  const language = useContext(LanguageContext)
  const [ fieldVisible, setFieldVisible ] = useState(false)
  const [ passwordError, setPasswordError ] = useState('')
  const [ passwordSuccess, setPasswordSuccess ] = useState('')

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPasswordError('')
    const password = e.target.newpassword.value
    const passwordConfirm = e.target.newpassword2.value
    if (password.length > 0 && password === passwordConfirm ) {
      try {
        console.log('change password')
        authenticationService.changePassword(adminToken, e.target.newpassword.value)
        setPasswordSuccess(language.success.passwordChanged)
      } catch {
        setPasswordError(language.errors.errorChangingPassword)
      }
    } else {
      setPasswordError(language.errors.passwordsMustBeIdentical)
    }
    e.target.newpassword.value = ''
    e.target.newpassword2.value = ''
  }

  return(
    <div>
      <button 
        className="Calculator-feedback-toggle" 
        onClick={() => setFieldVisible(!fieldVisible)}>
        {language.headers.changePassword} {fieldVisible ? '▲' : '▼'}
      </button>
      {
        fieldVisible === true &&  
        <>    
          <h3>{language.headers.changePassword}</h3>
          <form onSubmit={(e) => handlePasswordChange(e)}>
            <input className='Admin-password-field' type='password' name='newpassword' placeholder={language.content.newPassword} />
            <input className='Admin-password-field' type='password' name='newpassword2' placeholder={language.content.newPassword2} />
            <input className='Admin-password-button' type='submit' value={language.buttons.send}/>
          </form>        
          {passwordSuccess.length > 0 && <p className='Success'>{passwordSuccess}</p>}
          {passwordError.length > 0 && <p className='Error'>{passwordError}</p>}  
        </>     
      }
    </div>
  )
}

export default PasswordChange