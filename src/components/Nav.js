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
        <NavLink to='/' exact>
          Home
        </NavLink>
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
        <div className='pipe' />
        <NavLink to='https://login.com/'>Login</NavLink>
        <NavLink className='button' to='/enrol-now/' exact>
          Enrol now
        </NavLink>
      </div>
    </div>
  </nav>
)
