import React from 'react'

const SideDrawer = ({ show, toggleDrawer, setBody }) => {

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
        <li className='Side-Drawer-item' onClick={() => handleSelection('about')}>About Us</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('companies')}>For Companies</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('people')}>For People</li>
      </ul>
    </nav>
  )
}

export default SideDrawer