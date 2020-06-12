import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'

const Admin = ({ saveToDatabase, setSaveToDatabase }) => {

  const language = useContext(LanguageContext)

  const toggleSaveToDatabase = () => {
    saveToDatabase ? setSaveToDatabase(false) : setSaveToDatabase(true)
  }

  const downloadCompanyData = () => {
    //
  }

  const downloadPersonData = () => {
    //
  }

  const downloadCompanyFeedback = () => {
    //
  }

  const downloadPersonsFeedback = () => {
    //
  }

  return (
    <div className='Container' >
      <div className='Admin-container'>
        <h3 className='Admin-header'>{language.headers.adminHeader}</h3>
        <label>
          <Toggle
            defaultChecked={saveToDatabase}
            onChange={() => toggleSaveToDatabase()} />
          <span className='Admin-toggle-text'>Save answers to the database</span>
        </label>
        <h5>{language.headers.downloadFiles}</h5>
        <div className='Admin-download-buttons-div'>
          <button className='Admin-download-button' onClick={() => downloadCompanyData()}>{language.buttons.downloadCompanies}</button>
          <button className='Admin-download-button' onClick={() => downloadPersonData()}>{language.buttons.downloadPersons}</button>
          <button className='Admin-download-button' onClick={() => downloadCompanyFeedback()}>{language.buttons.downloadCompanyFeedback}</button>
          <button className='Admin-download-button' onClick={() => downloadPersonsFeedback()}>{language.buttons.downloadPersonsFeedback}</button>
        </div>
      </div>
    </div>
  )
}

export default Admin
