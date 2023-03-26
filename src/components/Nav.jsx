import React from 'react'
import logo from '../assets/Vector.svg'
import './Nav.css'

export default function Nav() {
    return (
        <nav className='nav'><img className='logo' src={logo} alt="airbnb-logo" /></nav>
        
    )
}