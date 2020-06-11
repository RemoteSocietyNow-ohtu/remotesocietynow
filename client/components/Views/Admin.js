import React, { useContext, useState } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import Toggle from 'react-toggle'

const Admin = ({ saveToDatabase, setSaveToDatabase }) => {

  const language = useContext(LanguageContext)
  const [error, setError] = useState('')

  const toggleSaveToDatabase = () => {
    saveToDatabase ? setSaveToDatabase(false) : setSaveToDatabase(true)
  }

  return (
    <div className='Container' >
      <div className='Admin-container'>
        {error != '' && <p className='Error'>{error}</p>}
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
