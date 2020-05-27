import React from 'react'
import logo from '../../resources/logo512.png'

const Navbar = ({ setBody }) => {

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <img className='Navbar-logo' src={logo} alt='RemoteSocietyNow' onClick={() => setBody('main')} />
        </nav>
      </header>
    </div>
  )
}

export default Navbar
