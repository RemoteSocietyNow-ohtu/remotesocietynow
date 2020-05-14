import React, { useState } from 'react'
import logo from '../resources/logo512.png'
import DrawerToggleButton from './DrawerToggleButton'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'

const Navbar = ({ setBody }) => {

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
              <li className='Navbar-item' onClick={() => setBody('companies')}>For Companies</li>
              <li className='Navbar-item' onClick={() => setBody('people')}>For People</li>
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
