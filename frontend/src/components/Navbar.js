import React, { useState, useContext } from 'react'
import logo from '../resources/logo512.png'
import DrawerToggleButton from './DrawerToggleButton'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import LanguageContext from '../Contexts/LanguageContext'

const Navbar = ({ setBody }) => {
  const language = useContext(LanguageContext)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
  }

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <div className='Navbar-navigation'>
            <DrawerToggleButton toggleDrawer={toggleDrawer} />
          </div>
          <img className='Navbar-logo' src={logo} alt='RemoteSocietyNow' onClick={() => setBody('main')} />
          <div className='Navbar-spacer'></div>
          <div className='Navbar-items'>
            <ul>
              <li className='Navbar-item' onClick={() => setBody('gdprCompliancy')}>{language.navigation.gdprCompliancy}</li>
              <li className='Navbar-item' onClick={() => setBody('about')}>{language.navigation.aboutUs}</li>
              <li className='Navbar-item' onClick={() => setBody('companies')}>{language.navigation.forCompany}</li>
              <li className='Navbar-item' onClick={() => setBody('people')}>{language.navigation.forPeople}</li>
            </ul>
          </div>
        </nav>
      </header>
      <SideDrawer show={drawerOpen} toggleDrawer={toggleDrawer} setBody={setBody} />
      {drawerOpen && <Backdrop toggleDrawer={toggleDrawer} />}
    </div>
  )
}

export default Navbar
