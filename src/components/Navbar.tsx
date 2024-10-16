import React from 'react'
import Logo from '../assets/image/logo.png'
import Button from './button'
const Navbar:React.FC = () => {
  return (
    <nav className='flex items-center justify-between'>
      <img className='' src={Logo} alt="" />
      <div>
        <Button name="inscrire"/>
      </div>
    </nav>
  )
}

export default Navbar