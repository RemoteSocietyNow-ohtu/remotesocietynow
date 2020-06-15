import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'

const Admin = ({ Cookies }) => {

  const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''
  const language = useContext(LanguageContext)
  const adminToken = Cookies.get('adminToken')

  const toggleSaveToDatabase = () => {
    // todo
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
