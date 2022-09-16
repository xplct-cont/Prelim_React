import React from 'react'
import Logo from '../assets/react.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-secondary">
    <a className="navbar-brand  text-white" href="#">
    <img src={Logo} alt=""/> </a>
     <div className="nav mx-auto">
         <ul className="navbar-nav ">
            <li className='nav-item'>
                <a className='navlink text-white' href="#">Home |</a>
                <a className='navlink text-white' href="#"> Visitors |</a>
                <a className='navlink text-white' href="#"> About Us</a> 
            </li>
           
           
            
         </ul>
     </div>
    
    

  
  
     </nav>
  )
}

export default Navbar