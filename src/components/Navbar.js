import React from 'react'
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Nav className="bg-dark text-white p-3" defaultActiveKey="/" as="ul">
      <NavLink className='m-2' to='/' exact > Homepage</NavLink>
      <NavLink className='m-2' to="/watchlist" exact > WatchList</NavLink>
      <NavLink className='m-2' to="/aboutus" exact > About Us</NavLink>
      <NavLink className='m-2' to="/contactus" exact > Contact Us</NavLink>
    </Nav>
  )
}

export default NavBar;