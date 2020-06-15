import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'
import fileService from '../../services/fileService'

const Admin = () => {

  const language = useContext(LanguageContext)

  const toggleSaveToDatabase = () => {
    // todo
  }

  const getCompanyData = async () => {
    await fileService.getCompanyCSV()
  }

  const getEmployeeData = async () => {
    await fileService.getEmployeeCSV()
  }

  const getCompanyFeedbackData = async () => {
    await fileService.getCompanyFeedbackCSV()
  }

  const getEmployeeFeedbackData = async () => {
    await fileService.getEmployeeFeedbackCSV()
  }

  return (
    <div className='Container' >
      <div className='Admin-container'>
        <h3 className='Admin-header'>{language.headers.adminHeader}</h3>
        <label>
          <Toggle
            defaultChecked={true}
            onChange={() => toggleSaveToDatabase()} />
          <span className='Admin-toggle-text'>Save answers to the database</span>
        </label>
        <h5>{language.headers.downloadFiles}</h5>
        <div className='Admin-download-buttons-div'>
          <button className='Admin-download-button' onClick={() => getCompanyData()}>{language.buttons.downloadCompanies}</button>
          <button className='Admin-download-button' onClick={() => getEmployeeData()}>{language.buttons.downloadPersons}</button>
          <button className='Admin-download-button' onClick={() => getCompanyFeedbackData()}>{language.buttons.downloadCompanyFeedback}</button>
          <button className='Admin-download-button' onClick={() => getEmployeeFeedbackData()}>{language.buttons.downloadPersonsFeedback}</button>
        </div>
      </div>
    </div>
  )
}

export default Admin
