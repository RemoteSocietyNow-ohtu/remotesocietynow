import React, { useContext } from 'react'
import logo from '../../resources/logo512.png'
import LanguageContext from '../../Contexts/LanguageContext'
import authenticationService from '../../services/authenticationService'

const Navbar = ({ body, setBody, Cookies, setSuccess }) => {

  const language = useContext(LanguageContext)
  
  let token 
  Cookies.get('token') ? token = Cookies.get('token') : token = ''
  let adminToken
  Cookies.get('adminToken') ? adminToken = Cookies.get('adminToken') : adminToken = ''
  
  const handleLogout = () => {
    authenticationService.logout(Cookies)
    setSuccess(language.success.loggedOut)
    setTimeout(() => {
      setSuccess('')
    }, 5000)
  }

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <img className='Navbar-logo' src={logo} alt='RemoteSocietyNow' onClick={() => setBody('main')} />
          {adminToken != '' && <p className='Navbar-sign-in' onClick={() => setBody('admin')}>{language.buttons.admin}</p>}
          {token == '' && adminToken == '' && <div className='Navbar-authentication-div'>
            {body !== 'login' && <button className='Navbar-login-button' onClick={() => setBody('login')}>Login</button>}
            {body !== 'signUp' && <p className='Navbar-sign-in' onClick={() => setBody('signUp')}>{language.buttons.signUp}</p>}
          </div>}
          {token != '' && <div className='Navbar-authentication-div'>
            <button className='Navbar-logout-button' onClick={() => authenticationService.logout(Cookies)}>Logout</button>
          </div>}
          {adminToken != '' && <div className='Navbar-authentication-div'>
            <button className='Navbar-logout-button' onClick={() => handleLogout()}>Logout</button>
          </div>}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
