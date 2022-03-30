import React from 'react'

export default function Navbar() {
  return (
    <header>
      <div className="Header-con">
        <div className="logo">DEVLAB</div>
        <nav>
          <ul className="nav">
            <li className="nav__Item">Home</li>
            <li className="nav__Item">Shop</li>
            <li className="nav__Item">Service</li>
            <li className="nav__Item">Blog</li>
            <li className="nav__Item">Contact</li>
            <li className="nav__Item">About</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
