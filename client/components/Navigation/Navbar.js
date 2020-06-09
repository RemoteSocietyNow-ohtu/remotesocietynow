import React from 'react'
import logo from '../../resources/logo512.png'

const Navbar = ({ body, setBody }) => {

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <img className='Navbar-logo' src={logo} alt='RemoteSocietyNow' onClick={() => setBody('main')} />
          <div className='Navbar-authentication-div'>
            {body !== 'login' && <button className='Navbar-login-button' onClick={() => setBody('login')}>Login</button>}
            {body !== 'signIn' && <p className='Navbar-sign-in' onClick={() => setBody('signIn')}>Sign in</p>}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
