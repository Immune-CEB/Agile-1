import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
         <nav className="menu">
        <ul>
        <img className="logo" src="https://e7.pngegg.com/pngimages/285/461/png-clipart-bmw-m-car-bmw-5-series-logo-bmw-emblem-trademark.png" alt="Logo Fiat"/>
        <div className="title">Concesionario BMW</div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">Sobre nosotros</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
            <li><Link to="/login">Log In</Link></li>
        </ul>
    </nav>
    
  )
}
