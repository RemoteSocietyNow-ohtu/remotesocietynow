import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'

const Admin = ({ saveToDatabase, setSaveToDatabase }) => {

  const language = useContext(LanguageContext)

  const toggleSaveToDatabase = () => {
    saveToDatabase ? setSaveToDatabase(false) : setSaveToDatabase(true)
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
      </div>
    </div>
  )
}

export default Admin
