import React from 'react'
import './Header.css';
import kl_logo from './kl_logo.jpeg';



const Header = () => {
  return (
    <div>
      <header className="header">
      <img src={kl_logo} alt="KL University Logo" className="logo"/>
      <h1>KL University</h1>
      </header>
    </div>
  )
}

export default Header


