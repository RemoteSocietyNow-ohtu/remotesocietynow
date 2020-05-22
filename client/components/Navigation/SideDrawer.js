import React, { useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const SideDrawer = ({ show, toggleDrawer, setBody }) => {

  const language = useContext(LanguageContext)

  let drawerClasses = ['Side-Drawer']
  if (show) {
    drawerClasses.push('open')
  }

  const handleSelection = (body) => {
    setBody(body)
    toggleDrawer()
  }

  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li className='Side-Drawer-item' onClick={() => handleSelection('gdprCompliancy')}>{language.navigation.gdprCompliancy}</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('about')}>{language.navigation.aboutUs}</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('companies')}>{language.navigation.forCompany}</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('people')}>{language.navigation.forPeople}</li>
      </ul>
    </nav>
  )
}

export default SideDrawer