import React, { useContext, useState, useEffect } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'
import settingsService from '../../services/adminSettingsService'
import authenticationService from '../../services/authenticationService'

const Admin = ({ Cookies }) => {
  const [ toggleValue, setToggleValue ] = useState(false)
  const [ passwordError, setPasswordError ] = useState('')
  const [ passwordSuccess, setPasswordSuccess ] = useState('')
  const language = useContext(LanguageContext)
  const adminToken = Cookies.get('adminToken')

  useEffect(() => {
    const setToggle = async () => {
      setToggleValue(await settingsService.getSaveToggleValue())
    }
    setToggle()
  }, [])

  const toggleSaveToDatabase = async(e) => {
    e.preventDefault()
    setToggleValue(!toggleValue)
    await settingsService.setSaveToggle(adminToken, !toggleValue)
  }

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

  return (
    <div className='Container' >
      <div className='Admin-container'>
        <h3 className='Admin-header'>{language.headers.adminHeader}</h3>
        <label>
          <Toggle
            checked={toggleValue}
            onChange={(e) => toggleSaveToDatabase(e)}               
          />
          <span className='Admin-toggle-text'>Save answers to the database</span>
        </label>
        <h5>{language.headers.downloadFiles}</h5>
        <div className='Admin-download-buttons-div'>
          <a href={`/api/files/companyCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadCompanies}</button></a>
          <a href={`/api/files/employeeCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadPersons}</button></a>
          <a href={`/api/files/companyFeedbackCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadCompanyFeedback}</button></a>
          <a href={`/api/files/employeeFeedbackCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadPersonsFeedback}</button></a>
        </div>
        <h2>{language.headers.changePassword}</h2>
        <form onSubmit={(e) => handlePasswordChange(e)}>
          <input className='Admin-password-field' type='password' name='newpassword' placeholder={language.content.newPassword} />
          <input className='Admin-password-field' type='password' name='newpassword2' placeholder={language.content.newPassword2} />
          <input className='Admin-password-button' type='submit' value={language.buttons.send}/>
        </form>        
        {passwordSuccess.length > 0 && <p className='Success'>{passwordSuccess}</p>}
        {passwordError.length > 0 && <p className='Error'>{passwordError}</p>}
      </div>
    </div>
  )
}

export default Admin
