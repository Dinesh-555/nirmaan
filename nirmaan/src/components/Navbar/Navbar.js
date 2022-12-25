import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import logo from '../../Assets/logo.svg'
export const Navbar = () => {
  return (
      <nav className='navbar'>
        <div>
          <Link className='nav_item' id='nav_left' ><img height={40} width = {40} src= {logo} alt = ''></img></Link>
        </div>
        <div>
          <NavLink className='nav_item' to = '/' > Home <span className='dot'></span> </NavLink>
          <NavLink className='nav_item' to = '/students' > Team <span className='dot'></span></NavLink>
          <NavLink className='nav_item' to = '/about' > About <span className='dot'></span> </NavLink>
          <NavLink className='nav_item' to = '/startups' > Startups <span className='dot'></span> </NavLink>
          <NavLink className='nav_item' to = '/media' > Media <span className='dot'></span> </NavLink>
          <NavLink className='nav_item' to = '/blog' > Blog  <span className='dot'></span> </NavLink> 
        </div>
        <div>
          <Link className = 'nav_item' id='nav_right'> <FontAwesomeIcon  icon={faUser} /> </Link>
        </div>
      </nav>
    
  )
}
