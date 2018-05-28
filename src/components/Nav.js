import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='Nav--Container-Group'>
        <NavLink to='/about/' exact>
          About
        </NavLink>
        <NavLink to='/learning/' exact>
          Learning
        </NavLink>
        <NavLink to='/centres/' exact>
          Centres
        </NavLink>
        <NavLink to='/enrollments/' exact>
          Enrollments
        </NavLink>
        <NavLink to='/parents/' exact>
          Parents
        </NavLink>
        <NavLink to='/careers/' exact>
          Careers
        </NavLink>
        <NavLink to='/contact/' exact>
          Contact
        </NavLink>
        <div className='Nav-Pipe' />
        <NavLink className='Nav-Login' to='https://login.com/'>
          <img src='/images/login.svg' alt='Person Icon' />
          Login
        </NavLink>
        <NavLink className='Button Button-outline' to='/enrol-now/' exact>
          Enrol now
        </NavLink>
      </div>
    </div>
  </nav>
)
