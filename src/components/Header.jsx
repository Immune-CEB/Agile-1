import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
         <nav className="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">Sobre nosotros</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
        </ul>
    </nav>
    
  )
}
