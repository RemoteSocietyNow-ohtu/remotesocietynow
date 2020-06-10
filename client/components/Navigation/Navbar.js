import React, { useContext } from 'react'
import logo from '../../resources/logo512.png'
import LanguageContext from '../../Contexts/LanguageContext'

const Navbar = ({ body, setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <img className='Navbar-logo' src={logo} alt='RemoteSocietyNow' onClick={() => setBody('main')} />
          <div className='Navbar-authentication-div'>
            {body !== 'login' && <button className='Navbar-login-button' onClick={() => setBody('login')}>Login</button>}
            {body !== 'signUp' && <p className='Navbar-sign-in' onClick={() => setBody('signUp')}>{language.buttons.signUp}</p>}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
