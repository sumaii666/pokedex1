import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navstyle.css';

     function NavBar()
     {
          return(

               <nav className='header'>
                    <ul>
                     
                         <li><Link to="/">HOME</Link></li>
                         <li><Link to="/about">ABOUT</Link></li>
                         <li><Link to="/pokedex">POKEDEX</Link></li>
                    </ul>
               </nav>
          )
     }

export default NavBar;
