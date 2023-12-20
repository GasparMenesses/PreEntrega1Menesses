import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <div>
        <header>
            <nav className='NavBar'>
                <img className='logo' src='https://raw.githubusercontent.com/GasparMenesses/smo-club/master/images/PhotoRoom_20230301_114227.png' alt="" />
                <ul>
                    <li>ROPA</li>
                    <li>SHAPES</li>
                    <li>NOSOTROS</li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    </div>
  )
}
