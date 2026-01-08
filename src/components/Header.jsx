import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
         <nav className="menu">
        <ul>
        <img className="logo" src="src\images\bmw-white-logo-hd-png-701751694708574rsodsw0tk5.png" alt="Logo BMW"/>
        <div className="title">Concesionario BMW</div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">Sobre nosotros</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
            <li><Link to="/login">Log In</Link></li>
        </ul>
    </nav>
    
  )
}
