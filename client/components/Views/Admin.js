import React, { useContext, useState, useEffect } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'
import settingsService from '../../services/adminSettingsService'

const Admin = ({ Cookies }) => {
  const [ toggleValue, setToggleValue ] = useState(false)
  const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''
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
          <a href={`${baseurl}/api/files/companyCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadCompanies}</button></a>
          <a href={`${baseurl}/api/files/employeeCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadPersons}</button></a>
          <a href={`${baseurl}/api/files/companyFeedbackCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadCompanyFeedback}</button></a>
          <a href={`${baseurl}/api/files/employeeFeedbackCSV/${adminToken}`}><button className='Admin-download-button'>{language.buttons.downloadPersonsFeedback}</button></a>
        </div>
      </div>
    </div>
  )
}

export default Admin
